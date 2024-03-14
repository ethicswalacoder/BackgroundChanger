import React, { useState } from 'react'



const App = () => {
  const [color, setColor] = useState("olive");


  return (
   <div className=" w-full  h-screen" style={{backgroundColor: color}}>
    <div className="bg-white w-[70px] h-[700px] rounded-full float-end mr-16 my-4  shadow-lg shadow-black-600/40 overflow-hidden ">

      <button className="w-[50px] h-[50px] rounded-full bg-red-500  mx-[10px] my-1 mt-6 shadow-black/40 shadow-md" onClick={()=> setColor("#ef4444")} ></button>
      <button className="w-[50px] h-[50px] rounded-full bg-blue-600  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#2563EB")}></button>
      <button className="w-[50px] h-[50px] rounded-full bg-violet-600  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#763aed")}></button>
      <button className="w-[50px] h-[50px] rounded-full bg-pink-600  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#db2777")}></button>
      <button className="w-[50px] h-[50px] rounded-full bg-yellow-600  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#ca8a04")}></button>
      <button className="w-[50px] h-[50px] rounded-full bg-green-600  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#16a34a")}></button>
      <button className="w-[50px] h-[50px] rounded-full bg-blue-400  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#60a5fa")}></button>
      <button className="w-[50px] h-[50px] rounded-full bg-white  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#ffffff")}></button>
      <button className="w-[50px] h-[50px] rounded-full bg-orange-600  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#ea580c")}></button>
      <button className="w-[50px] h-[50px] rounded-full bg-gray-600  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#4b5563")}></button>
      <button className="w-[50px] h-[50px] rounded-full bg-black  mx-[10px] my-1 shadow-black/40 shadow-md" onClick={()=> setColor("#000000")}></button>
     
     
     
     
     

    </div>
   </div>
  )
}

export default App
