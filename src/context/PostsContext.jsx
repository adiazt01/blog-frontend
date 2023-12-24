import { createContext, useEffect, useState } from "react";
import { api } from "../api/axios";

export const PostContext = createContext()

export const PostProvider = ({children}) => {
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () => {
        try {
            const {data} = await api.get("/posts?page=1&limit=10")
            setBlogs(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <PostContext.Provider value={{blogs}}>
            {children}
        </PostContext.Provider>
    )
}