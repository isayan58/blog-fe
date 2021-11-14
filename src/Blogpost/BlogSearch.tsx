import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
    const [blogSearch, setBlogSearch] = useState<Blogs[]>([]);
    const searchBlog = () =>
    {
        const fetchBlog = async () =>
        {
            const apiResponse = await fetch(`http://localhost:8000/search/${search}`);
            const responseData = await apiResponse.json();
        }
    }
    useEffect(() =>
        searchBlog(), []);
    return(
        <div>{search}</div>
    )
}
export default BlogSearch;