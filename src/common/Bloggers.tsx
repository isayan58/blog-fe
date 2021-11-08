import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
interface Bloggers{
    _id : string,
    blogger_id: Number,
    image: string,
    name: String,
    rating: Number,
}
const Bloggers = () =>{
    const [bloggers, setBloggers] = useState<Bloggers[]>([]);
    const history = useNavigate();

    const getBloggers =() =>
    {
        const fetchBloggers = async() => {
            const apiResponse = await fetch("http://localhost:8000/bloggers");
            const responseD = await apiResponse.json();
            const responseData = responseD;
            setBloggers(responseData);
            //console.log("apiResponse:",apiResponse);
            console.log(responseData);
            //console.log("bloggers:", bloggers);
        };
        fetchBloggers();    
    };


    useEffect(getBloggers, []);
    return(
        <div>
            <div>List of Bloggers:</div>
            <div>
        <br/>
        <div className="bloggers-list">
          {bloggers.map((data) => (
            <div className="blogger-cards" key={data._id}>
              <div
                className="blogger-card"
                onClick={() => history(`/blogs/${data.blogger_id}`)}>
                <img src={data.image} alt="blogger" />
                <div className="blogger-title">{data.name}, {data.rating}*</div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};
export default Bloggers;