"use client"
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function ContextChild() {
  const userData = useContext(AppContext);
  console.log("userData Child", userData)
  return (
    <>
      <div>context_child</div>
      {userData ? (<div>{userData.first_name} {userData.last_name} {userData.email}</div>) : (
        <p>Don t have data</p>
      )}
    </>
  )
}
