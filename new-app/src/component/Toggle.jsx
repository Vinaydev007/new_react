// import React from 'react'
// import { useState } from 'react'

// export default function Toggle() {
//     const[currstate,setstate]=useState("light")
//   const Convertlight=()=>{
//         if(currstate==="light"){
//             setstate("dark")
//         }
//         else{
//             setstate("light")
//         }
//   }
//   return (
//     <div style={{backgroundColor:currstate ,height:"100vh",width:"100vw"}} >
//         <button id="light"onClick={Convertlight}>convertor</button>
//     </div>
//   )
// }
import React, { useState } from 'react';

export default function Toggle() {
  const [currstate, setstate] = useState("light");

  const Convertlight = () => {
    setstate(currstate === "light" ? "dark" : "light");
    console.log("clicked")
  };

  return (
    <div
      style={{
        backgroundColor: currstate,
        color: currstate === "light" ? "black" : "white",
        height: "100vh",
        width: "100vw",
        transition: "all 0.3s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <button onClick={Convertlight}>Convertor</button>
    </div>
  );
}

