import { useNavigate } from "react-router";
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

const Home = () =>{
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    const navigate = useNavigate();
    const getBlogs = () =>{
        const fetchBlogs = async() =>{
            const apiResponse = await fetch("http://localhost:8000/AllBlogs");
            const responseData = await apiResponse.json();
            setBlogs(responseData);
        }
        fetchBlogs();
    }
    useEffect(getBlogs, []);
    return(
        <div>
            {
                blogs.map((data)=>
                (
                    <div onClick={()=>navigate(`/blogs/${data.blogger_id}/${data.title}`)}>
                    <div><img src={data.header_image}/></div>
                    <div>{data.title}</div>
                    <div>{data.tags.map((tags)=>
                    (
                        <div>{tags} ; </div>
                    ))
                }</div>
                    </div>
                ))
            }
        </div>
    );
};
export default Home;