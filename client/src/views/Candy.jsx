import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const CandyPage = () => {
    const [CandyList, setCandyList] = useState([]);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/candy")
            .then(response =>{
                console.log(response);
                setCandyList(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleAddToCart = (candy) => {
        setCart([...cart, candy]);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/cart", cart)
            .then(response=>{
                navigate("/cart");
            })
            .catch(err=> {
                console.log(err)
            });
    };

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
            {
                CandyList.map((eachCandy)=>{
                    return(
                        <form onSubmit={handleSubmit}>
                        <div key={eachCandy._id} className='product'>
                            <img src={eachCandy.imgUrl} alt={eachCandy.title} style={{width: 350, height: 350}}></img>
                            <div className='description'>
                            <h3>{eachCandy.title}</h3>
                            <h3>${eachCandy.price}</h3>
                            </div>
                            <button className='addToCartBTN' onClick={() => handleAddToCart(eachCandy)}>Add to Cart</button>
                        </div>
                        </form>
                    )
                })
            }
        </div>
    )
}

export default CandyPage