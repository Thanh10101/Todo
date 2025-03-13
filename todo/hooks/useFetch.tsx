"use client";
import { useEffect } from "react";
import { IValue, DataAction } from "../model/IUser";
// import { useCustomReducer } from "./useReducer";
import { useReducer } from "react";

export const useFetch = (url: string) => {
    const reducer = (state: IValue, action: DataAction) => {
        switch (action.type) {
            case "FETCH_START":
                return { ...state, isLoading: true, error: null };
            case "FETCH_SUCCESS":
                return { ...state, isLoading: false, data: action.payload, error: null };
            case "FETCH_ERROR":
                return { ...state, isLoading: false, data: [], error: action.payload };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        data: [],
        isLoading: false,
        error: null
    })
    useEffect(() => {
        dispatch({ type: 'FETCH_START' });
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data.data });
        };
        fetchData();
    }, [url,dispatch]);
    console.log(state);
    return { ...state };
};