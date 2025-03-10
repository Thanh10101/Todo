"use client"
import React, { useEffect,useState } from 'react'

interface Iprops  {
    getData : (key:string) => Promise<Response>;
    
}
interface IComment {
   id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export default function CallbackChild({getData}:Iprops) {
    const [comment,setComment] = useState<IComment[]>([]) ;

    useEffect(()=>{
         getData("comment")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        setComment(res.data);
      })
      
    },[getData])

  return (
  <>
     <div>
      <h3>Callback Child Component</h3>
      {comment && comment.length > 0 ? (
        <ul>
          {comment.map((comment) => (
            <li key={comment.id} style={{ color: comment.color }}>
              <strong>{comment.name}</strong> ({comment.year}) - {comment.pantone_value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  </>
  )
}
