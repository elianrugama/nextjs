"use client"
import { create } from "domain";
import { createContext, useContext, useState, useEffect, use } from "react";
import {v4 as uuid} from "uuid"
import { useStorage } from "../hooks/useStorage";

export const TaskContext = createContext();
export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('el contex no esta')
    }
    return context;
}

export const TasksProvider = ({ children }) => {
    const [tasks, setTask] = useStorage('tasks', [])

    const createTask = (title, description) => 
        setTask([
            ...tasks,
            {
                id: uuid(),
                title,
                description,
                completed: false
            }
        ])
    const deleteTask = (id) => {
        setTask(tasks.filter(task => task.id !== id))
       
    }
    const updateTask = (id, title, description) => {
        const newTasks = tasks.map(task => task.id === id ? { id, title, description } : task)
        setTask(newTasks)
    }
    


    return (
        <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask}}>

            {children}
        </TaskContext.Provider>
    )
}
