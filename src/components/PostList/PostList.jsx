import React from "react";

import PostCard from "../PostCard/PostCard";
import './style.css';
import { List, Card} from 'antd';

const PostList=({goods =[], currentUser, handlePostLike, handlePostDelete, setPosts})=>{
        return(
      <>
        <div className="cards">
          {goods.map((item, index)=> (<PostCard {...item} key = {item._id}
             currentUser={currentUser}
             onPostLike={handlePostLike}
             onPostDelete={handlePostDelete}
             setPosts={setPosts}  
          
             />))}
        </div> 
        </>
         )
    
}

export default PostList;