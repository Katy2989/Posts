import React from 'react';
import PostList from '../../components/PostList/PostList';




export const PostListPage = ({ handlePostLike, goods, currentUser, handlePostDelete, setPosts}) => {
  return (
    <>
      <div className='content__cards'>
        <PostList
          handlePostLike={handlePostLike}
          goods = {goods}
          currentUser={currentUser}
          handlePostDelete={handlePostDelete}
          setPosts={setPosts} 
        />
      </div>
    </>
  );
};