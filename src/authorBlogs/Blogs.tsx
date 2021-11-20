import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import config from '../config/prod_config';

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
    const navigate = useNavigate();
    
    const getBlogs =()=>{
        const fetchblogs = async () =>
        {
            const apiResponse = await fetch(`${config.base_url}/blogs/${blogger_id}`);
            const responseData = await apiResponse.json();
            setBlogs(responseData);
        }
        fetchblogs(); //Redux store can be implemented for showing author name
    }
    useEffect(getBlogs,[]);
    return(
        <div>{blogs.map((data) => (
            <div onClick = {()=> navigate(`/blogs/${data.blogger_id}/${data.title}`)}>
            <div><img src ={data.header_image}/></div>
            <div>{data.title}</div>
            <div>{data.tags.map((tags) => (
                <div>{tags} ; </div>
            ))}</div>
            </div>
        ))}
        </div>
    );
}
export default Blogs;