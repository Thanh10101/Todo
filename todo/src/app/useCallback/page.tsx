"use client"
import React, { useState, useCallback } from 'react'
import CallbackChild from '../../../component/child_component/callback_child'
interface User {
  id: number,
  first_name: string,
  last_name: string
}
export default function UseCallback() {

  const getData = useCallback((type: string): Promise<Response> => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);
  const [user, setUser] = useState<User[]>([]);

  const handleData = () => {
    getData('users')
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUser(users);
      })

  }
  return (
    <>
      <p>Data</p>
      <p>User{JSON.stringify(user)}</p>
      <p>
        Get info
        {user && user.length > 0 ? (
          <ul>
            {user.map(
              (u) => (
                <li key={u.id}>
                  {u.id}-{u.first_name}-{u.last_name}
                </li>
              )
            )}
          </ul>
        ) : (<p>No users available</p>)}
      </p>
      <button type='button' onClick={handleData}>Get data</button>
      <CallbackChild getData={getData}></CallbackChild>
    </>
  )
}
