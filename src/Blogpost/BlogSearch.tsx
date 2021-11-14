import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

interface Blogs
{
    _id: string,
    blogger_id: number,
    title: string,
    header_image: string,
    content: string,
    tags: String[]
}

const BlogSearch = () =>
{
    const { search } = useParams();
    //console.log(params.search);
    const navigate = useNavigate();
    const [blogSearch, setBlogSearch] = useState<Blogs[]>([]);
    const searchBlog = () =>
    {
        const fetchBlog = async () =>
        {
            const apiResponse = await fetch(`http://localhost:8000/search/${search}`);
            const responseData = await apiResponse.json();
            setBlogSearch(responseData);
        }
        fetchBlog();
    }
    useEffect(() =>
        searchBlog(), [blogSearch]);
    return(
    <div className="home-blogs">
    {
        blogSearch.length != 0 ?
    blogSearch.map((data)=>
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
    :
    <div>No Search Results yet.</div>
    }
</div>
    )
}
export default BlogSearch;