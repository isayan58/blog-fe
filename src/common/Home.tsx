import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import './commonstyles/commonstyles.css';
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

const Home = () =>{
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    const navigate = useNavigate();
    const getBlogs = () =>{
        const fetchBlogs = async() =>{
            const apiResponse = await fetch(`${config.base_url}/AllBlogs`);
            const responseData = await apiResponse.json();
            setBlogs(responseData);
        }
        fetchBlogs();
    }
    useEffect(getBlogs, []);
    return(
        <div className="home-blogs">
                {
                blogs.map((data)=>
                (
                    <div className="blogs-card" onClick={()=>navigate(`/blogs/${data.blogger_id}/${data.title}`)}>
                    <div className="image-container"><img src={data.header_image}
                    className="home-blog-image"/></div>
                    <div className="blog-details-container">
                        <div>{data.title}</div>
                    <div className="tags">{data.tags.map((tags)=>
                    (
                        <div>{tags} ; </div>
                    ))
                    }</div>
                    </div>
                </div>
                ))
            }
        </div>
    );
};
export default Home;