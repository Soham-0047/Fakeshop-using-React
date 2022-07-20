import React from "react"
import {Link} from "react-router-dom"
import Cardcom from "./components/card/Cardcom"



export default function Home(){
    return (
      <>
      <h1><strong><uppercase>SHOP PRODUCTS</uppercase></strong></h1>
      <Link to="/about">About</Link>
        <Cardcom/>
      </>
    )
  }