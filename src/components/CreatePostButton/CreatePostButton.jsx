import React, { useState } from 'react';
import { Button, Modal, Form , Input} from 'antd';
import { CreateFormPost } from '../CreateFormPost/CreateFormPost';

export const CreatePostButton = ({showModal, handleCreatePost, setShowModal}) => {
 

    // 
    // const handleOk = 

  
  return (
    <>
      <Button type="primary" style={{ marginBottom: "20px", backgroundColor:"violet" }} 
        onClick=
        //  {()=>{console.log('22')}}
        {()=>{setShowModal(true)}}
        >
        Создать пост
      </Button>
     < CreateFormPost    handleCreatePost = {handleCreatePost}
    showModal={showModal}
    setShowModal = {setShowModal} />
    </>
  );
};

    // {onCreate, visible, setVisible}

//     return (
//       <>
//         <Button
//           type="primary"
//           style={{ marginBottom: "20px", backgroundColor:"violet" }}
          
//           size="large"
//         //   onClick={() => {
//         //     setVisible(true);
//         //   }
//         // }
//         >
//           Create Post
//         </Button>
//         {/* <PostCreateForm
//          visible={visible}
//          onCreate={onCreate}
//          onCancel={() => {
//            setVisible(false);
//          }}
//        /> */}
//       </>
//     );
  