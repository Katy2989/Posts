import React, { useState } from 'react';
import { Button, Modal, Form , Input} from 'antd';
import { CreateFormPost } from '../CreateFormPost/CreateFormPost';

export const CreatePostButton = ({showModal, handleCreatePost, setShowModal}) => {
  return (
    <>
      <Button type="primary" style={{ marginBottom: "20px", backgroundColor:"violet" }} 
        onClick={()=>{setShowModal(true)}} >
        Создать пост
      </Button>
     < CreateFormPost handleCreatePost = {handleCreatePost}
    showModal={showModal}
    setShowModal = {setShowModal} />
    </>
  );
};
