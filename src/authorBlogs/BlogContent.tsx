import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import './authorBlogs.css';
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
interface Bloggers{
  blogger_id: number,
  header_image: string,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: number,
  password: string,
  date_sign_up: string
}

const BlogContent =() =>
{
    const { title } = useParams();
    const {blogger_id} = useParams();
    const [blog, setBlog] = useState<Blogs>();
    const [blogger, setBlogger] = useState<Bloggers>();

    const getBlogDetails =() =>
    {
        const fetchBlogger = async() =>
        {
            const apiResponse = await fetch(`${config.base_url}/blogger/${blogger_id}`);
            const responseData = await apiResponse.json();
            setBlogger(responseData);
        }
        const fetchBlogDetails = async() =>
        {
            const apiResponse = await fetch(`${config.base_url}/blogcontent/${title}`);
            const responseData = await apiResponse.json();
            setBlog(responseData);
        }
        fetchBlogger();
        fetchBlogDetails();
    }
    useEffect(getBlogDetails, []);
    return(
        <div>
            <div className="blog-title">{blog?.title}</div>
            <div className="image_cls"><img src={blog?.header_image}/></div>
            <div className="blog-content">
                <div className="blog-content-box">{blog?.content}</div></div>
            <div className="author-block">Written by: {blogger?.firstName} {blogger?.lastName}.</div>
            <div className="blog-tags">Tags: {blog?.tags.map((tags) => (
                <div>{tags}; </div>
            ))}</div>
        </div>
    )
}

export default BlogContent;