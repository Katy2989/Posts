import React from "react";
import { List, Space, Card, Col, Row, Image, Divider, Tag, Avatar, Modal } from 'antd';
import Icon, { UserOutlined, HomeOutlined, ExclamationCircleOutlined, MessageOutlined, HeartTwoTone, DeleteOutlined } from '@ant-design/icons';
import "./style.css";
import { ReactComponent as Save } from "./save.svg";
import cn from 'classnames';
// import Post from "../PostPages/PostPages";
import { format } from 'date-fns';
import { Link } from "react-router-dom";
const { confirm } = Modal;
const { Meta } = Card;

const PostCard = ({ title, image, text, tags, onPostLike, onPostDelete, updated_at, created_at, likes, comments, _id,
  author: { _id: author_id, avatar, name }, currentUser,
}) => {
  const dataFormat = (format(new Date(created_at), 'dd.MM.yyyy'));

  const liked = likes.some((id) => id === currentUser?._id);
  const isCurrentUser = author_id === currentUser?._id;

  const [modal, contextHolder] = Modal.useModal();
  const textHTML = { __html: text };
  function handleLikeClick() {
    onPostLike({ _id, likes });
  }

  function handleDeleteClick() {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
      onPostDelete(_id);
    }
  }
  return (
    <div className="card__white">
      <div className="card__title">
        <Space size={18} wrap>
          <Avatar src={avatar} />
          <span className="card__ava">{name}</span>
        </Space>
      </div>
      <Link to={`/posts/${_id}`} className="card__link">
      <div className="card__content">

        <img className="card__img" alt="example" src={image} />


        <div className="card__text"><h3>{title}</h3>
          <p className="subtitle" dangerouslySetInnerHTML={textHTML}></p></div>
      </div>
      <Space style={{ padding: "0 20px", marginBottom: "5px" }} size={[0, 8]} wrap>
        {tags?.map((item, index) => <Tag color="#87d068" key={index}> {item}</Tag>)}
      </Space>
      </Link>
      <div className="card__footer">
        <button
          className={cn('card__favorite', {
            'card__favorite_is-active': liked,
          })}
          onClick={handleLikeClick}>
          <Save className='card__favorite-icon' /> {likes.length}
        </button>
        {!!comments.length && <div> <MessageOutlined /> {comments.length}</div>}
        {isCurrentUser ? (<div className="card__delete"><DeleteOutlined onClick={handleDeleteClick} /></div>) : null}
        <div>создано {dataFormat}</div>
      </div>
      
    </div>
  );
}
export default PostCard;