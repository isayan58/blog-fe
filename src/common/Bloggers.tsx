import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import config from '../config/prod_config';
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
const Bloggers = () =>{
    const [bloggers, setBloggers] = useState<Bloggers[]>([]);
    const history = useNavigate();

    const getBloggers =() =>
    {
        const fetchBloggers = async() => {
            const apiResponse = await fetch(`${config.base_url}/bloggers`);
            const responseD = await apiResponse.json();
            const responseData = responseD;
            setBloggers(responseData);
            console.log(responseData);
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
            <div className="blogger-cards" key={data.blogger_id}>
              <div
                className="blogger-card"
                onClick={() => history(`/blogs/${data.blogger_id}`)}>
                <img src={data.header_image} alt="blogger" />
                <div className="blogger-title">{data.firstName} {data.lastName}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};
export default Bloggers;