import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const SnacksPage = () => {
    const [SnackList, setSnackList] = useState([]);
    const [cart, setCart] = useState([]); // added a state for the cart
    // const { addItemToCart } = useContext(CartContext);
    const navigate = useNavigate();


    useEffect(()=>{
        axios.get("http://localhost:8000/api/snacks")
            .then(response =>{
                console.log(response);
                setSnackList(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleAddToCart = (snack) => {
        setCart([...cart, snack]); // add the product to the cart
    }
    // const handleAddToCart = (snack) => {
    //     addItemToCart(snack);
    // };

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/cart", cart)
            .then(response=>{
                navigate("/cart");
            })
            .catch(err=> {
                console.log(err)
                // setErrors(err.response.data.errors);
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
                SnackList.map((eachSnack)=>{
                    return(
                        <form onSubmit={handleSubmit}>
                        <div key={eachSnack._id} className='product'>
                            <img src={eachSnack.imgUrl} alt={eachSnack.title} style={{width: 350, height: 350}}></img>
                            <div className='description'>
                            <h3>{eachSnack.title}</h3>
                            <h3>${eachSnack.price}</h3>
                            </div>
                            <button className='addToCartBTN' onClick={() => handleAddToCart(eachSnack)}>Add to Cart</button>
                            {/* <Link to={`/cart`}>Go to Cart</Link> */}
                        </div>
                        </form>
                    )
                })
            }
        </div>
    )
}

export default SnacksPage