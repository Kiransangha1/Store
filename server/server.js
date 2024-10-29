import express from 'express';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './configs/mongoose.config.js';
import router from "./routes/candy.routes.js"
import routerSnacks from "./routes/snacks.routes.js"
import routerCart from "./routes/cart.routes.js"

const app = express();
app.use(express.json(), cors());
dotenv.config();

const PORT = process.env.PORT;

dbConnect();

app.use("/api/candy", router)
app.use("/api/snacks", routerSnacks)
app.use("/api/cart", routerCart)

// app.listen(PORT, () =>
//     console.log(`Listening on port: ${PORT}`)
// );
const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
  );
const io = new Server(server, {cors: true});

io.on("connection", socket => {
    console.log(socket.id);

    // listen for a client event
    socket.on("chat", (data) => {
        console.log("got a message", data);
    
        // emit this back to the client / everyone
        io.emit('post chat', data)
    })
})
