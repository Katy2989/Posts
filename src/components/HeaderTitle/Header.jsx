import "antd/dist/reset.css";
import s from "./style.module.css";
import {
  Layout,
  Row,
  Col,
  Menu,
  theme,
  Card,
  Space,
  Avatar,
  Button,
  Typography,
} from "antd";
import PostList from "../PostList/PostList";
import BreadcrumbPost from "../BreadcrumbPost/BreadcrumbPost";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { CardContext } from "../../Untils/cardContext/cardContext";
import { UserContext } from "../../Untils/UserContext/userContext";
import { ChangeLoginForm } from "../ChangeLoginForm/changeLoginForm";
import api from "../../Untils/api";
const { Header, Content } = Layout;
const { Text, Title, Paragraph } = Typography;

const HeaderTitle = ({ avatar, name, email }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  console.log(currentUser, "jjkbhjbj");
  const onChangeLogin = (value) => {
    console.log(value);
    // return null;

    Promise.all([
      api.changeLogin({ avatar: value.avatar }),
      api.changeName({ name: value.name || currentUser.name, about: value.about || currentUser.about }),
    ]).then(([res1, res2]) => setCurrentUser((state) => ({ ...state, avatar: res1.avatar, about: res2.about, name: res2.name })));

    // api.changeLogin({ avatar: value.avatar }).then((data) => {
    //   api
    //     .changeName({
    //       name: value.name || currentUser.name,
    //       about: value.about || currentUser.about,
    //     })
    //     .then((data) =>
    //       setCurrentUser((state) => ({
    //         ...state,
    //         name: data.name,
    //         about: data.about,
    //         avatar: data.avatar,
    //       }))
    //     );
    // });

    // api.changeLogin(value)
    //   .then((newUser) => setCurrentUser(newUser)
    //   );

    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Header style={{ background: "#ffd8b8", lineHeight: "60px" }}>
        <div>
          <ChangeLoginForm
            visible={isModalOpen}
            onChangeLogin={onChangeLogin}
            image={currentUser?.avatar}
            onCancel={() => {
              setIsModalOpen(false);
            }}
          />
          <div className={s.flex}>
            <Avatar size={50} src={currentUser?.avatar} />
            <div>
              <div>{name}</div>
              <div>{email}</div>
            </div>
            <Button
              type="primary"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Change
            </Button>
          </div>
        </div>
      </Header>
    </Layout>
  );
};
export default HeaderTitle;
