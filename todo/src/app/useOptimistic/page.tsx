"use client"
import React, { useRef } from 'react'


export default function Page() {
    type Account ={
        username: string;
        password :string;
    }
    const ref = useRef<Account>({
        username:"",
        password:""
    })
    const handleClick =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        ref.current = { ...ref.current, [name]: value };
    console.log(ref.current.username, ref.current.password);
  
    }
  return (
    <>
    <div>{JSON.stringify(ref)}</div>
    <input name="username" type="text" onChange={handleClick}/>username
    <input name="password" type="text" onChange={handleClick}/>password
  
    </>
  )
}
