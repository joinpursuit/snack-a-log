import React from 'react'
import  './Home.css'
import image from './Images/Image3.webp'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className ="home">
      <h1>Welcome to The Vending Machine App.</h1>
      <p>Created By:</p>

      
      <h2>Kalilah Clarke
      <a href="https://github.com/KalilahClarke/KalilahClarke"><img className = 'vending-machine' src ={image} alt ='velding-machine'></img></a>
      </h2>


      {/* <img className = 'vending-machine' src ={image} alt ='velding-machine'></img> */}

      <h2>Kenyetta Griffin
      <a href="https://github.com/PursuitMadeMe"><img className = 'vending-machine' src ={image} alt ='velding-machine'></img></a>
      </h2>
      





      
    </div>
  )
}

export default Home