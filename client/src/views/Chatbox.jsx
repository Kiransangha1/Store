import io from "socket.io-client";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChatBox = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState("")
    const [approve, setApprove] = useState(false)
    const [storeOwnerMessages, setStoreOwnerMessages] = useState([]);

    const [socket] = useState(() => io(':8000'));

    const onSubmitHandler = (e) => {
        e.preventDefault();
        socket.emit("chat", {username: username, content:input});
        setInput("")
    }

    useEffect(() => {
        // listen from server
        socket.on("new message", (msg) => {
          setStoreOwnerMessages((prevMsgState) => [...prevMsgState, msg]);
        });
      
        // react 18: socket.removeAllListeners()
        return () => socket.removeAllListeners();
      }, [socket]);
      
    useEffect(() => {
        // listen from server
        socket.on("post chat", (msg) => {

            setMessages(prevMsgState => [...prevMsgState, msg])
        })

        // previous react: socket.disconnect(true) 
        // react 18: socket.removeAllListeners()
        return () => socket.removeAllListeners();


    }, [socket])

    const usernameHandler= (e)=>{
        e.preventDefault()
        if(username){
            setApprove(true)
        }
    }

    return (
        <div>
            <div className="nav">
                    <Link to="/">HOME</Link>
            </div>
            <h1 className="chat"> Connect with others</h1>
            {
                !approve?
                    <form className="chat" onSubmit={usernameHandler}>
                        <label>Enter your name </label>
                        <input className="search" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        <button className="addToCartBTN"> Enter chat</button>
                    </form> :
                    <>
                        <form className="chat" onSubmit={onSubmitHandler}>
                            <input className="search" type="text" name='msg' onChange={(e) => setInput(e.target.value)} value={input} />
                            <button className="addToCartBTN">send</button>
                        </form>
                        <div className="chat" >
                            {
                                messages.map((msg, i) => (<p key={i}>{msg.username} : {msg.content}</p>))
                            }
                        </div>
                    </>

            }



        </div>
    );
}

export default ChatBox