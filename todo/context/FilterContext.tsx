"use client"
import { createContext, useEffect } from "react";
import { IFilter } from "../model/ITodo";
import { IChild } from "../model/IChild";
import { useSelector,useDispatch } from "react-redux";
import {useState} from 'react';
import { RootState } from "../redux/store";


export const FilterContext = createContext<IFilter>({});

export const FilterProvider = ({children}: IChild) => {
    const filter = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch();
    const [search, setSearch] = useState(filter.search);
    const [status, setStatus] = useState(filter.status);
    const [priority, setPriority] = useState(filter.priority);
    useEffect(() => {
        setSearch(filter.search );
        setStatus(filter.status );
        setPriority(filter.priority );
    }
    , [filter]);
    
    return (
        <>
            <FilterContext.Provider value={{search,status,priority,dispatch}}>
                {children}
            </FilterContext.Provider>
        </>
    )
}

