import "./App.css";
import question from "./1.gif";
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [par, setPar] = useState("");

 useEffect(()=>{
  getAdvice();
 },[])

 const getAdvice = async ()=> {
  const responce = await fetch('http://www.boredapi.com/api/activity')
  const data = await responce.json()
  console.log(data.activity)
  setAdvice(data.activity)
  setPar(advice)
 }

  return (
    <div className="App">
      <div className="App-container">
        <h1>Welcome to our fun app</h1>
      </div>
      <div className="App-container">
        <p>Click on the button and find out what advice you got</p>
      </div>
      <div className="App-container">
         <button onClick={getAdvice}>click here</button> 

      </div>

      <div className="App-container advice">
        <h4>{par}</h4>
        <img src={question} alt="smth move" width="50px" />
      </div>
    </div>
  );
}

export default App;
