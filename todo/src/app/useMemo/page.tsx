// "use client"
// import React, { useState, useMemo, useEffect } from 'react'


// export default function Page() {
//   useEffect(()=>{
//     const expensiveFunction=(number:number)=>{
//     console.log("begin");
//     const start = new Date();
//     while ( new Date().getTime() - start.getTime() < 3000);
//     console.log("end",new Date().getTime() -start.getTime());
//     // setTimeout(()=>{
//     //   console.log("end 3s");
//     // },3000);

//     return number*number
//   }
//   },[])
//   const [count,setCount] = useState<number>(0);
//   const number = useMemo(()=>{
//     return expensiveFunction(10)
//   },[]);
//   const handleClick =()=>{
//     setCount(count=>count +1);
//   }
//   return (
//     <>
//         <div>Count: {count}</div>
//         <button type='button' onClick={()=>handleClick()}>add</button>
//         <div>Number: {number}</div>
//     </>
//   )
// }
"use client";
import React, { useState, useEffect } from "react";

// Hàm tốn tài nguyên (chạy 3 giây)
const expensiveFunction = (number: number) => {
  console.log("begin");
  const start = new Date();
  while (new Date().getTime() - start.getTime() < 3000);
  console.log("end", new Date().getTime() - start.getTime());
  return number * number;
};

export default function Page() {
  const [count, setCount] = useState<number>(0);
  const [number, setNumber] = useState<number | null>(null);

  // Chạy expensiveFunction không chặn UI
  useEffect(() => {
    setNumber(expensiveFunction(10));
  }, []);

  return (
    <>
      <div>Count: {count}</div>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <div>Number: {number ?? "Loading..."}</div>
    </>
  );
}
