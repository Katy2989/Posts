import React from "react";
import { List, Space, Card, Col, Row,Image, Divider, Tag, Avatar, Modal } from 'antd';
import Icon,{ UserOutlined, HomeOutlined, ExclamationCircleOutlined, MessageOutlined, HeartTwoTone, DeleteOutlined  } from '@ant-design/icons';
import "./style.css";

import {ReactComponent as Save} from "./save.svg";
import cn from 'classnames';
// import moment from "moment";


// import cn from 'classnames';
// import api from '../../utils/api';

import './style.module.css';
import Post from "../Post/Post";
import {format} from 'date-fns';

const { confirm } = Modal;
const { Meta } = Card;
// const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
// const gridStyle = {
//     // width: '50%',
   
//     gridTemplateColumns:"repeat(3,(minmax(100px, 1fr)))",
//     gridTemplateRows:"(minmax(0px, max-content) 10fr minmax(0px, max-content)))",
//     gap:"20px",
//     backgroundColor:"#fff",
// const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;




//   };

// const HeartSvg = () => (
//     <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
//       <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
//     </svg>
//   );


const PostCard=({title, image, text, tags,  onPostLike, onPostDelete, updated_at, created_at, likes,comments,_id,
    author: { _id: author_id, avatar, name },  currentUser, 
   })=>{
    const dataFormat  = (format(new Date(created_at), 'dd.MM.yyyy'));

        const liked = likes.some((id) => id === currentUser?._id);
        const isCurrentUser = author_id === currentUser?._id;
        console.log(_id, currentUser, author_id, isCurrentUser);
// console.log(likes.length, "likes");
const [modal, contextHolder] = Modal.useModal();

function handleLikeClick() {
    onPostLike({ _id, likes });
  }

  function handleDeleteClick() {
    // confirm({
    //   title: 'Confirm',
    //   icon: <ExclamationCircleOutlined />,
    //   content: 'Вы уверены, что хотите удалить?',
    //   okText: 'Да',
    //   cancelText: 'Нет',
    //   onOk(()=>{handleDeleteClick}),


    //   onCancel() {
    //         console.log('Cancel');
    //       },
    //       }  );
   

    // let number = parseFloat(event.target.parentNode.getAttribute("data-key"));
    // let newTodos = this.state.todos;
    // if (conf) {
      if(window.confirm('Вы уверены, что хотите удалить?')){
      onPostDelete(_id);}
      // newTodos = newTodos.splice(newTodos.indexOf(number), 1);
      // this.setState({ todos: newTodos });
    // } else {
    //   alert(`ok we won't delete it `);
    //   // onPostDelete();
    // }
  }
    // const formatData = moment({updated_at}).utc().format('YYYY-MM-DD');

 return(

<div className="card__white">
<div className="card__title">
<Space size={18} wrap>
    <Avatar src={avatar}/>   
    <span className="card__ava">{name}</span>
  </Space>
 
</div>
<div className="card__content">
    <img className="card__img" alt="example" src={image} />
    <div className="card__text"><h3>{title}</h3>
    <p>{text}</p></div>
</div>  
    <Space style ={{padding:"0 20px", marginBottom:"5px"}} size={[0, 8]} wrap>

      <Tag color="#87d068">{tags}</Tag>

    </Space>
    <div className="card__footer">
  
  
   <button
          className={cn('card__favorite', {
            'card__favorite_is-active': liked,
          })}
          onClick={handleLikeClick}
        >
          <Save className='card__favorite-icon' /> { likes.length }
          {/* <Save className={isFavorite ? "card__favorite-icon" :'card__favorite-not-icon'}/> */}
      
    </button>
   {/* <HeartTwoTone twoToneColor="#b8b8b8" 
   style={{ fontSize: '18px', cursor:"pointer"}}
   onClick={{handleLikeClick}}/> {likes.length}</Icon> */}


    {!!comments.length && <div> <MessageOutlined /> {comments.length}</div>}
    
    
{isCurrentUser?(<div className="card__delete"><DeleteOutlined onClick={handleDeleteClick}/></div>):(<div></div>)}

    <div>создано {dataFormat}</div>
    </div>
    </div>






 );

}
  export default PostCard;