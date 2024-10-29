import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const CartPage = () => {
  const [cartList, setCartList] = useState([]);
  const [checout, setCheckout] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/cart")
      .then(response => {
        console.log(response);
        setCartList(response.data);
      })
      .catch(err => console.log(err))
  }, [])

  const handleAddToCheckout = () => {
    setCheckout([...cartList]);
}

  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8000/api/cart/${deleteId}`)
      .then(response => {
        setCartList(cartList.filter((eachCart) => deleteId !== eachCart._id))
      })
      .catch(err => console.log(err))
  }

  const totalPrice = cartList.reduce((acc, current) => acc + current.price, 0);

  return (
    <div>
      <div className="nav">
                    <Link to="/">HOME</Link>   |   
                    <Link to="/contact">CONTACT US</Link>
            </div>
      <h2>My Cart!</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((cart) => (
            <tr key={cart._id}>
              <td>{cart.title}</td>
              <td>{cart.quantity}</td>
              <td>{cart.price}</td>
              <td>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3384/3384384.png"
                  alt="delete"
                  style={{ width: 50, height: 50 }}
                  onClick={() => handleDelete(cart._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Total: ${totalPrice}</h2>
        <button className='addToCartBTN' onClick={handleAddToCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;