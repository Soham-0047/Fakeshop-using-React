import React from "react"
import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import Bar from "./components/Bar"
import CardDetails from "./components/card/detailcard/CardDetails"
function About(){
   return(
    <>
    <h1>About Page</h1>
    <Link to="/">Home</Link>
    </>
   )
}

function App() {
  return (
    <div className="App">
      {/*Fixed Component*/}
      <Bar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<CardDetails/>}/>

      </Routes>
    </div>
  );
}

export default App;
