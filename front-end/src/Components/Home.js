import React from 'react'
import  './Home.css'
import image from './Images/Image3.webp'

function Home() {
  return (
    <div className ="home">
      <h2>Welcome to</h2> 
      <img className = 'vending-machine' src ={image} alt ='velding-machine'></img>
      <img className = 'vending-machine' src ={image} alt ='velding-machine'></img>
      <img className = 'vending-machine' src ={image} alt ='velding-machine'></img>
      <h2>The Vending Machine App.</h2>
    </div>
  )
}

export default Home