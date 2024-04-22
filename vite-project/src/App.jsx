import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./App.css";
import CartItems from "./Components/CartItems";
import PurchaseTotal from "./Components/PurchaseTotal";


function App() {

function App() {
  return (
    <div className="flex flex-col md:flex-row max-w-4xl h-full px-7 py-7 mx-auto">
      {/* <!-- My Cart --> */}
      <CartItems />

      {/* <!-- Purchase Total --> */}
      <PurchaseTotal />
    </div>
  );
}


}


export default App
