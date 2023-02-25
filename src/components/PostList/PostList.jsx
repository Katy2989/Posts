import React from "react";

import PostCard from "../PostCard/PostCard";
import './style.css';
import { List, Card} from 'antd';

const PostList=({goods, currentUser, handlePostLike, handlePostDelete})=>{
     console.log(goods, "data");
    return(
      <>
        <div className="cards">
          {goods.map((item, index)=> (<PostCard {...item} key = {`${item._id}`}
             currentUser={currentUser}
             onPostLike={handlePostLike}
             onPostDelete={handlePostDelete}
             />))}
        </div> 
        </>
         )
    
}

export default PostList;