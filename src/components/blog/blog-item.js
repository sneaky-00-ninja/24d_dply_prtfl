import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import striptags from "striptags";
import Truncate from "react-truncate";

const blogItem = props => {
    const {
        id,
        blog_status, 
        content, 
        title, 
        featured_image_url
    } = props.blogItem;

    return ( 
        <div> 
            <Link to={`/b/${id}`}>
                <h1>{title}</h1>
            </Link>
            <div>
                <Truncate lines={3} 
                    ellipsis={
                        <span>
                            ...<Link to={`/b/${id}`}>Read more</Link>
                        </span>
                    }
                >
                    {striptags(content)}</Truncate>
        
        
            </div>
        </div>
    );
};

export default blogItem;