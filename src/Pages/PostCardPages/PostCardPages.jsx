import React, { useState } from 'react';
import { useCallback } from 'react';
// import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import Header from '../../components/Header/header';
// import Logo from '../../components/Logo/logo';
import { PostPages } from '../../components/PostPages/PostPages';
// import { Product } from '../../components/Product/product';
// import Search from '../../components/Search/search';
import Spinner from '../../components/Spinner/spinner';
import api from '../../Untils/api';

// import { UserContext } from '../../context/userContext';


export const PostCardPages = ({ handlePostLike, setCurrentUser, currentUser }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
//   const { handleProductLike } = useContext(UserContext);

   const { postID } = useParams();

   console.log(postID);
   
  useEffect(() => {
      setIsLoading(true);
      
    api
      .getPostById(postID)
      .then((postData) => setPosts(postData))
      .catch((err) => console.log('err', err))
      .finally(() => setIsLoading(false));
  }, [postID]);



  return (
    <>
      <div className='content__cards'>
        {isLoading ? (
          <Spinner />
        ) : (
          <PostPages
            // posts = {posts}
             {...posts}
            // currentUser={currentUser}
            onPostLike={handlePostLike}
          />
        )}
      </div>
    </>
  );
};