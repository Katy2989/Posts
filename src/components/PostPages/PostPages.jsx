import cn from 'classnames';
import React, { useContext, useEffect } from 'react';
import s from './style.module.css';
import { Button, Avatar, Space, Tag } from 'antd';
import { ReactComponent as Save } from './img/save.svg';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { UserContext } from '../../Untils/UserContext/userContext';
// import { useEffect } from 'react';

export const PostPages = ({
  title, image, text, tags, onPostLike, created_at, updated_at, _id, likes = []
}) => {
  
  const currentUser = useContext(UserContext);
  // { format(new Date(created_at), 'dd.MM.yyyy') };
  //  console.log(dataFormated);
  const liked = likes.some((id) => (id === currentUser?._id));

  const location = useLocation();
  console.log( location, "location" );

  const textHTML = { __html: text };

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  function handleLikeClick() {
    onPostLike({ _id, likes });
    // console.log({ _id, likes });
 
  }

  return (
    <>
      <div className={s.container}>
        <Button type="primary" style={{ margin: "20px 0", backgroundColor: "violet" }}
          onClick={handleClick} >
          назад
        </Button>
        <div className={s.cardWhite}>
          <div className={s.cardContent}>
            <img className="card__img" alt="example" src={image} />
            <div>
              <div className="card__title">
                <Space size={18} wrap>
                  <Avatar src={currentUser?.avatar} />
                  <div>
                    <span className="card__ava">{currentUser?.name}</span>
                  </div>
                </Space>
              </div>
              <div className={s.postCard}>
                <button
                  className={cn('card__favorite', {
                    'card__favorite_is-active': liked,
                  })}
                onClick={handleLikeClick}
                >
                  <Save className='card__favorite-icon' /> {likes.length}
                </button>
                <Space size={[0, 8]} wrap>
                  {tags?.map((item, index) => <Tag color="#87d068" key={index}> {item}</Tag>)}
                </Space>
              </div>
              <div className="card__text"><h3>{title}</h3>
                <p className={s.subtitle} dangerouslySetInnerHTML={textHTML}></p></div>
              {/* </div> */}
            </div>

          </div>
        </div>

        {/* <div> создано {format(new Date(created_at), 'dd.MM.yyyy')}</div> */}
      </div>

    </>

  );
};