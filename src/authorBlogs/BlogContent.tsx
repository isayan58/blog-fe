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
interface Bloggers{
    _id : string,
    blogger_id: Number,
    image: string,
    name: String,
    rating: Number,
}

const BlogContent =() =>
{
    const { title } = useParams();
    const {blogger_id} = useParams();
    //console.log(title, ',', blogger_id);
    const [blog, setBlog] = useState<Blogs>();
    const [blogger, setBlogger] = useState<Bloggers>();

    const getBlogDetails =() =>
    {
        const fetchBlogger = async() =>
        {
            const apiResponse = await fetch(`http://localhost:8000/blogger/${blogger_id}`);
            const responseData = await apiResponse.json();
            setBlogger(responseData);
            console.log(responseData);
            console.log(blogger);
        }
        const fetchBlogDetails = async() =>
        {
            const apiResponse = await fetch(`http://localhost:8000/blogcontent/${title}`);
            const responseData = await apiResponse.json();
            setBlog(responseData);
            console.log(responseData);

        }
        fetchBlogger();
        fetchBlogDetails();
    }

    useEffect(getBlogDetails, []);
    return(
        <div>
            <div>{blog?.title}</div>
            <div><img src={blog?.header_image}/></div>
            <div>{blog?.content}</div>
            <div>Written by: {blogger?.name}</div>
            <div>{blog?.tags.map((tags) => (
                <div>{tags}; </div>
            ))}</div>
        </div>
    )
}

export default BlogContent;