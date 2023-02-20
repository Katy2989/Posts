
import 'antd/dist/reset.css';
// import s from "./style.module.css";

import { Breadcrumb, Space,Row, Col } from "antd";
import Search from '../Search/Search';
import s from "./style.module.css";
import { CreatePostButton } from '../CreatePostButton/CreatePostButton';

const BreadcrumbPost = ({onInput, handleFormSubmit,showModal,handleCreatePost, setShowModal}) => {

    return(<>
    <Space direction="vertical" style={{ display: "flex", padding:"24px", 
      backgroundColor:"red", margin:"10px 0"
    }}>
  
  <Breadcrumb>
<Breadcrumb.Item>Главная</Breadcrumb.Item>
<Breadcrumb.Item>
  <a href="">Посты</a>
</Breadcrumb.Item>
</Breadcrumb>
{/* <Row>
  <Col span={36} offset={0}>    */}
<div className={s.header}>
    <h1>Добро пожаловать на страничку все и обо всем</h1>
    <Search onSubmit ={handleFormSubmit} onInput = {onInput} />
</div>

{/* < */}
{/* </Col> */}
    
{/* </Row> */}

</Space>
</>
);


}

export default BreadcrumbPost;