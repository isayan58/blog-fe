import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
interface Blogs
{
    _id: string,
    blogger_id: number,
    title: string,
    header_image: string,
    content: string,
    tags: String[]
}

const Blogs = () =>
{
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    const { blogger_id } = useParams();
    
    const getBlogs =()=>{
        const fetchblogs = async () =>
        {
            const apiResponse = await fetch(`http://localhost:8000/blogs/${blogger_id}`);
            const responseData = await apiResponse.json();
            setBlogs(responseData);
        }
        fetchblogs();
    }
    useEffect(getBlogs,[]);
    return(
        <div>Blogs by ID: {blogger_id}</div>
    );
}
export default Blogs;