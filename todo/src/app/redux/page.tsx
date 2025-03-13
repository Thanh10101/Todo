"use client"
import React from 'react'
import Filter from '../../../component/todo_list/filter'
import TodoItems from '../../../component/todo_list/todoList'
import { stored } from '../../../redux/store'
import { Provider } from 'react-redux'
import { FilterProvider } from '../../../context/FilterContext'
import '@ant-design/v5-patch-for-react-19';

export default function TodoList() {
    return (
        <>
            <Provider store={stored}>
                <FilterProvider>
                    <div className="min-h-screen flex items-center justify-center bg-gray-100">
                        <Filter />
                        <TodoItems />
                    </div>
                </FilterProvider>
            </Provider>
        </>
    )
}