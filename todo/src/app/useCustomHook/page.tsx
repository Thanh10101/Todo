"use client"
import React from 'react'
import { useFetch } from '../../../hooks/useFetch';
import { IUser } from '../../../model/IUser';


export default function CustomHook() {
    const getData = useFetch('https://reqres.in/api/users');
    return (
        <>
            {getData.isLoading ? (<p>Loading...</p>) :
                (
                    <ul>
                        {getData.data.map((user: IUser) => (
                            <li key={user.id}>{user.first_name} {user.last_name}</li>
                        ))}
                    </ul>
                )}
        </>
    )
}
