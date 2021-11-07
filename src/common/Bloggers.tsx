import React, { useEffect, useState } from "react";
interface Bloggers{
    blogger_id: Number,
    name: String,
    rating: Number,
}

const Bloggers = () =>{
    const [bloggers, setBloggers] = useState<Bloggers[]>([]);

    const getBloggers =() =>
    {
        const fetchBloggers = async() => {
            const apiResponse = await fetch("http://localhost:8000/bloggers");
            const responseData = await apiResponse.json();
            setBloggers(responseData.message);
            // console.log("responseData:",responseData);
             console.log("bloggers:", bloggers);
        };
        fetchBloggers();    
    };


    useEffect(getBloggers, []);
    return(
        <div>
            <div>List of Bloggers:</div>
            {
                    <div>{bloggers}</div>
            }
        </div>
    );
};
export default Bloggers;