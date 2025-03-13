"use client"

import {  useState } from "react"
import { IValue,DataAction } from "../model/IUser";

interface IReducer{
    (state: IValue, action: DataAction) : IValue;
    
}

export const useCustomReducer = (reducer: IReducer, initialValue: IValue)=>{
    const [state, setState] = useState(initialValue);
    const dispatch = (action: DataAction) => {
        const newState = reducer(state, action);
        setState(newState);
    }
    return [{ ...state }, dispatch];
}
