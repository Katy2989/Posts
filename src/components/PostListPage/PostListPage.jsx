import React from "react";
import Post from "../Post/Post";
import PostCard from "../PostCard/PostCard";
import './style.css';
import { List, Card} from 'antd';

const PostList=({data, currentUser, handlePostLike, handlePostDelete})=>{
     
    return(
        <div className="cards">
          {data.map((item, index)=> (<PostCard {...item} key = {`${item._id}`}
             currentUser={currentUser}
             onPostLike={handlePostLike}
             onPostDelete={handlePostDelete}
             />))}
        </div> 
         )
    
}

export default PostList;