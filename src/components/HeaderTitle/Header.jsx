
import 'antd/dist/reset.css';
import s from "./style.module.css";

import { Layout, Row, Col, Menu, theme, Card, Space, Avatar, Button, Typography } from 'antd';
import PostList from '../PostListPage/PostListPage';
import BreadcrumbPost from '../BreadcrumbPost/BreadcrumbPost';
const { Header, Content } = Layout;
const { Text, Title, Paragraph } = Typography;

const HeaderTitle = ({ avatar, name, email }) => {
  console.log({ avatar }, "avatar");
  console.log("12");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout >
      <Header style={{ background: "#ffd8b8", lineHeight: "60px", }}>
        <div>
          <div className={s.flex}>
            {/* <Space align="baseline" style={{background: "#ffd8b8",lineHeight: "2px",}}> */}
            <Avatar size={50} src={avatar} />
            <div>
              <div>{name}</div>
              <div>{email}</div>
            </div>
            <Button type="primary">Change</Button>
            {/* </Space> */}
          </div>
        </div>
        {/* <Row justify="end">
      <Col flex="70px"> <Avatar size={50} src={ avatar} /></Col>
<Col >
      <p> {name}</p> 
     <p>  {email}</p>
     </Col>
      <Col xs={{ span: 2, offset: 0 }}> <Button>
              Change Avatar
        </Button> </Col>
     
    </Row> */}

        {/* <Space direction="horizontal" style={{ position: "absolute", top:"0", right: "25px"}}>
        <Avatar size={50} src="Ava" />

        <Space direction="horizontal" style={{ }}>
            <Title level={4} >
             dfdg
            </Title>
            <Text >gfth</Text>
            </Space>
  
   
        <Button>
              Change Avatar
        </Button> */}

        {/* <Title style={{ paddingLeft: "30px", color: "#0099FF" }} level={2}>
        Welcome to Our CoolPosts!
        </Title>
        
        <Title style={{ color: "#0099FF" }} level={3}>Read, relax and post interesting content;-)</Title> */}
        {/* </Space>  */}

        {/* <Avatar size={40} src=""/>   
    <span className="card__ava"></span>
  </Space> */}
        {/* <div className="logo"/>
        <Menu
          theme="red"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(7).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        /> */}
        {/* <Row justify="space-between" align="middle">
          <Col span={10} offset={0}>
            <Title level={4} style={{ color: "#FFFFFF" }}>
              {currentUser.name}
            </Title
            >
            <Text style={{ color: "#FFFFFF" }}>{currentUser.about}</Text>
          </Col>

        
        </Row> */}
      </Header>

      {/* <Content
        style={{
          backgroundColor: "red",
       
        }}
      >
        
        <BreadcrumbPost/> */}

      {/* <Space direction="horizontal" size={20}>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card
      
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card
      
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  
       
  </Space> */}


      {/* <div
          className={s.site_ayout_content}
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div> */}

      {/* </Content> */}

    </Layout>
  );
};
export default HeaderTitle;
