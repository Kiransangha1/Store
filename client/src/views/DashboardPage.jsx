import React from "react";
import { Link, Route, Routes } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div>
            <div className="nav">
                    <Link to="/">HOME</Link>   |   
                    <Link to="/contact">CONTACT US</Link>   |   
                    <Link to="/cart">
                        <img 
                            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-trolley-images-pixabay-download-pictures-14.png" 
                            alt="cart" 
                            style={{ width: 50, height: 50 }} 
                        />
                    </Link>
                    
            </div>
            <main className="box">
                <div className="text-center">
                    <h1 className="title">Superstore</h1>
                    <img src="https://cdn-icons-png.flaticon.com/512/5131/5131602.png" alt="logo" style={{width:450, height: 450}} />
                    <h1>
                        <Link to="/candy">CANDIES</Link>   |
                        <Link to="/snacks">SNACKS</Link>
                    </h1>
                </div>
            </main>
            <div>
            <Link to="/chat" className="chatbox">
                        <img 
                            src="https://m.media-amazon.com/images/I/41Ac16Tk8IL.png" 
                            alt="chatbox" 
                            style={{ width: 100, height: 100 }} 
                        />
                    </Link>
            </div>

        </div>
    );
};
export default DashboardPage;