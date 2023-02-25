
import 'antd/dist/reset.css';
import { Breadcrumb, Space, Row, Col } from "antd";
import Search from '../Search/Search';
import s from "./style.module.css";
import { CreatePostButton } from '../CreatePostButton/CreatePostButton';
import { Link } from 'react-router-dom';

const BreadcrumbPost = ({ children, onInput, onSubmit, showModal, handleCreatePost, setShowModal }) => {

  return (<>
    <Space direction="vertical" style={{
      display: "flex", padding: "24px",
      backgroundColor: "red", margin: "10px 0"
    }}>

      <Breadcrumb>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href="/">Посты</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className={s.header}>
        <h1>Добро пожаловать на страничку все и обо всем</h1>
       {children}
      </div>

    </Space>
  </>
  );


}

export default BreadcrumbPost;