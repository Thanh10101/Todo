"use client"
import React, { useReducer } from 'react'

const initValue = {
  isLoading: false as boolean,
  data: [] as IUser[],
  error: null as string | null,
}
interface IUser {
  first_name: string,
  last_name: string,
  email?: string,
  id: number
}
type DataAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: IUser[] }
  | { type: "FETCH_ERROR"; payload: string | null }

const dataReducer = (state: typeof initValue, action: DataAction) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null }; // Reset error khi bắt đầu fetch
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};



export default function UseReducer() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "TANG":
        return state + 1;
      case "GIAM":
        return state - 1;
      default: return state;
    }
  }, 0);
  const [data, dataDispatch] = useReducer(dataReducer, initValue);

  const getData = () => {
    dataDispatch({ type: "FETCH_START" })
    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((res) => {
          dataDispatch({ type: "FETCH_SUCCESS", payload: res.data })
          console.log(res.data)
        })
        .catch((error) => {
          dataDispatch({ type: "FETCH_ERROR", payload: error })

        })
    }, 2000)
  }
  return (
    <>
      <p>Get API</p>
      <button type="button" onClick={getData}>Get Data</button>
      {data.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{JSON.stringify(data.data)}</p>
          <ul>
            {data.data.map((user: IUser) => (
              <li key={user.id}>{user.first_name} {user.last_name}</li>
            ))}
          </ul>
        </>
      )}

      <p>Count {count}</p>
      <button type="button" onClick={() => dispatch("TANG")}>Tang</button>
      <button type="button" onClick={() => dispatch("GIAM")}>Giam</button>
    </>
  )
}

