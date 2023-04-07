
import 'antd/dist/reset.css';
import { Breadcrumb, Space, Row, Col } from "antd";
import Search from '../Search/Search';
import s from "./style.module.css";
import { CreatePostButton } from '../CreatePostButton/CreatePostButton';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CardContext } from '../../Untils/cardContext/cardContext';
import { ReactComponent as FavIcon } from './img/fav.svg';

const BreadcrumbPost = ({ children, onInput, onSubmit, showModal, handleCreatePost, setShowModal }) => {
  const location = useLocation();

  const { favorites } = useContext(CardContext);
  return (<>
    <Space direction="vertical" style={{
      display: "flex", padding: "24px",
      backgroundColor: "red", margin: "10px 0"
    }}>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/">Посты</Link>
            <Link className={s.favoritesLink} to={'/favorites'}>
              <FavIcon />
              {favorites.length !== 0 && (
                <span className={s.iconBubble}>{favorites.length}</span>
              )}
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={s.header}>
        <h1>Добро пожаловать на страничку все и обо всем</h1>
        {location.pathname === '/' && (
        <Link to="/">
            {children}
        </Link>
      )}
      
      </div>
    </Space>
  </>
  );

}

export default BreadcrumbPost;