import React, { useContext, useState } from "react";
import { List, Space, Tag, Avatar, Modal } from 'antd';
import Icon, {  MessageOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import "./style.css";
import { ReactComponent as Save } from "./save.svg";
import cn from 'classnames';

import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { PostEditForm } from "../PostEditForm/PostEditForm";
import api from "../../Untils/api";
import { CardContext } from "../../Untils/cardContext/cardContext";
import { PostCommentForm } from "../PostCommentForm/PostCommentForm";


const PostCard = ({ title, image, text, tags, onPostLike, onPostDelete, updated_at, created_at, likes, comments, _id,
  author: { _id: author_id, avatar, name }, currentUser
}) => {
  const valueProvider = useContext(CardContext);

  const [visible, setVisible] = useState(false);
  const dataFormat = (format(new Date(created_at), 'dd.MM.yyyy'));

  const liked = likes.some((id) => id === currentUser?._id);
  const isCurrentUser = author_id === currentUser?._id;

  const textHTML = { __html: text };

  function handleLikeClick() {
    onPostLike({ _id, likes });
  }

  function handleDeleteClick() {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
      onPostDelete(_id);
    }
  }

  function handleComment() {
    setVisible(true);
  }

  const onEdit = (values) => {
    const valuesTags = { ...values, tags: (values.tags.length !== 0 ? values?.tags.split(",").map(tag => tag.trim()).filter(tag => tag !== "") : []) }
    api.editPostById(_id, valuesTags)
      .then((newPost) => {
        const newPosts = valueProvider.posts.map(p => p._id === newPost._id ? newPost : p);
        valueProvider.setPosts(newPosts);
      });
    setVisible(false);
  }

  const onComments = (values) => {
    setVisible(false);
  }

  function handleEditClick() {
    setVisible(true);
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
        {!!comments.length && <div> <MessageOutlined onClick={handleComment} /> {comments.length}
          <PostCommentForm
            visible={visible}
            onEdit={onComments}
            _id={_id}
            comments={comments}
            currentUser={currentUser}
            onCancel={() => {
              setVisible(false);
            }}
          />
        </div>}
        {isCurrentUser ? (<div className="card__delete"><DeleteOutlined onClick={handleDeleteClick} />   </div>) : null}
        {isCurrentUser ? (<div className="card__delete"><EditOutlined onClick={handleEditClick} />
          <PostEditForm
            visible={visible}
            onEdit={onEdit}
            _id={_id}
            onCancel={() => {
              setVisible(false);
            }}
          /></div>) : null}
        <div>создано {dataFormat}</div>
      </div>
    </div>

  );

}
export default PostCard;