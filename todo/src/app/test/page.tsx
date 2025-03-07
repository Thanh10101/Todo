"use client"
import { useState } from "react";

type Account = {
  username: string;
  password: string;
};

export default function Home() {
  const [user, setUser] = useState<Account>({
   username:"123",
   password:""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
   setUser(prev=>({...prev, [name]: value}));
};
  return (
    <> <div> 
      <div>UseState</div>
      <div>{JSON.stringify(user)}</div>
      <input type="username" name="username"   placeholder={user.username} onChange={handleChange}/>username
       <input type="password" name = "password"   placeholder={user.password} onChange={handleChange}/>password
      {/* <button onClick={handDel}>Click</button> */}
    </div>
    </>
  );
}
