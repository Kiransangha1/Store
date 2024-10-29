import Cart from "../models/cart.model.js"

const CartController = {
    getAll: async (req, res)=>{
        try{
            const allCart = await Cart.find(); // without anything in (), find all
            res.json(allCart);
        }catch(err){
            console.log(err);
            res.status(400).json(err); // frontend would be able to receive the json as an error
        }
    },
    getOne: async (req, res)=>{
        try{
            const oneCart = await Cart.findById(req.params.id); // Both work!
            res.json(oneCart);
        }catch(err){
            console.log(err);
            res.status(400).json(err); // frontend would be able to receive the json as an error
        }
    },
    create: async (req, res)=>{
        try{
            const newCart = await Cart.create(req.body); // mongoose functions are async 
            res.json(newCart)
        }catch(err){
            console.log(err);
            res.status(400).json(err); // frontend would be able to receive the json as an error
        }
    },
    update: async (req, res)=>{
        try{
            const options = {
                new: true, // returned result is the updated object 
                runValidators: true // to enable the validation in update
            }

            const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body , options);
            res.json(updatedCart);
        }catch(err){
            console.log(err);
            res.status(400).json(err); 

        }
    },
    delete: async (req, res)=>{
        try{
            const deletedCart = await Cart.findByIdAndDelete(req.params.id);
            res.json(deletedCart);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
}

export default CartController