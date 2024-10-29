import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import ChatBox from "./views/Chatbox"
import CandyPage from './views/Candy'
import DashboardPage from './views/DashboardPage'
import CheckoutPage from './views/Checkout'
import CartPage from './views/Cart'
import ContactForm from './views/Contact'
import SnacksPage from './views/Snacks'


function App() {
  return (
    <>
      {/* <ChatBox /> */}
      <div>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/candy" element={<CandyPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/snacks" element={<SnacksPage />} />
          <Route path="/chat" element={<ChatBox />} />
        </Routes>
      </div>
    </>
  )
}

export default App
