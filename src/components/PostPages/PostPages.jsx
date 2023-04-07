import cn from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import  './style.css';
import { Button, Avatar, Space, Tag } from 'antd';
import { ReactComponent as Save } from './img/save.svg';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { UserContext } from '../../Untils/UserContext/userContext';
import { LikeOutlined } from '@ant-design/icons';

//лайки
export const 
PostPages = ({
  title, image, text, tags, onPostLike, _id, likes=[], author,
  }) => {
    
   const { currentUser, setCurrentUser }  = useContext(UserContext);

  const liked = likes.some((id) => (id === currentUser?._id));

  const [countLike, setCountLike] = useState(likes.length);
  const [like, setLike] = useState(liked);

  const location = useLocation();

  const textHTML = { __html: text };

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  function handleLikeClick() {
    onPostLike({ _id, likes });
    setLike(!like);
   (like? setCountLike(countLike -1) : setCountLike(countLike +1) );
  }

  return (
    <>
      <div className={"container"}>
        <Button type="primary" style={{ margin: "20px 0", backgroundColor: "violet" }}
          onClick={handleClick} >
          назад
        </Button>
        <div className={"cardWhite"}>
          <div className={"cardContent"}>
            <img className="card__img" alt="example" src={image} />
            <div>
              <div className="card__title">
                <Space size={18} wrap>
                  <Avatar src={author?.avatar} />
                  <div>
                    <span className="card__ava">{author?.name}</span>
                  </div>
                </Space>
              </div>
              <div className={"postCard"}>
                <button
                  className={cn('card__favorite', {
                     'card__favorite_is-active': (like)
                  })}
                onClick={handleLikeClick}
                >
                 <Save  /> 
                <span >{countLike}</span>
                </button>
                <Space size={[0, 8]} wrap>
                  {tags?.map((item, index) => <Tag color="#87d068" key={index}> {item}</Tag>)}
                </Space>
              </div>
              <div className="card__text"><h3>{title}</h3>
                <p className={"subtitle"} dangerouslySetInnerHTML={textHTML}></p></div>
            </div>

          </div>
        </div>
      </div>

    </>

  );
};