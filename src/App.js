//display is 1024x600
import React, { useState, useEffect } from "react";

function App(props) {
  const [data, setdata] = useState({
      mph: "",
      turn_direction: "",
    });
    useEffect(() => {
      // Using fetch to fetch the api from 
      // flask server it will be redirected to proxy
      fetch("/main").then((res) =>
      res.json().then((data) => {
      // Setting a data from api
      setdata({
        mph: data.MPH,
        turn_direction: data.turn_direction,});
      })
      );
      }, []);
  return (
    <div className = 'test'>
      <h1>{data.mph}</h1>
      <div className = 'card'>
        <h2>mph</h2>
        <div>
          <button id='button'>{data.turn_direction}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
