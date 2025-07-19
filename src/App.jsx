import React from "react";
import Card from "./Components/Card";

function App(){

  const data = ["khushi", "Aditya", "Anu"];

  return (
    <div>
      {data.map((elem, index)=>(
        <div className="px-3 py-4 bg-red-300 rounded-md w-fit">
          {elem}

      </div>))}

      </div>
    
  );
}



export default  App;