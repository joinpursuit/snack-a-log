import React from 'react'
import  './Home.css'
import image from './Images/Image3.webp'

function Home() {
  return (
    <div>
      <img className = 'vending-machine' src ={image} alt ='velding-machine'></img>
        <h2>Welcome to the Vending Machine</h2>
    </div>
  )
}

export default Home