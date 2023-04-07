import previousTuesday from 'date-fns/previousTuesday';
import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostPages } from '../../components/PostPages/PostPages';
import Spinner from '../../components/Spinner/spinner';
import api from '../../Untils/api';

export const PostCardPages = ({ handlePostLike}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState([]);
  const { postID } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getPostById(postID)
      .then((postData) => setPost(postData))
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
            {...post}
            onPostLike={handlePostLike}
          />
        )}
      </div>
    </>
  );
};