
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
            <Avatar size={50} src={avatar} />
            <div>
              <div>{name}</div>
              <div>{email}</div>
            </div>
            <Button type="primary">Change</Button>
          </div>
        </div>

      </Header>

    </Layout>
  );
};
export default HeaderTitle;
