
import 'antd/dist/reset.css';
import s from "./style.module.css";
import { Layout, Avatar, Button, } from 'antd';
import { useContext, useState } from 'react';
import { UserContext } from '../../Untils/UserContext/userContext';
import { ChangeAvatar, } from '../ChangeAvatar/changeAvatar';
import api from '../../Untils/api';
import { ChangeName } from '../ChangeName/changeName';
const { Header } = Layout;


const HeaderTitle = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenName, setIsModalOpenName] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const onChangeAvatar = (value) => {
    api.changeAvatar(value)
      .then((newAvatar) => setCurrentUser(newAvatar)

      );
    setIsModalOpen(false);
  };

  const onChangeName = (value) => {
    api.changeName({ name: value.name || currentUser.name, about: value.about || currentUser.about })
      .then((newData) => setCurrentUser(newData)

      );
    setIsModalOpenName(false);
  };

  return (
    <Layout >
      <Header style={{ background: "#ffd8b8", lineHeight: "60px", }}>
        <div>

          <div className={s.flex}>
            <Avatar size={50} src={currentUser?.avatar} onClick={() => {
              setIsModalOpen(true);
            }} />
            <ChangeAvatar
              visible={isModalOpen}
              onChangeAvatar={onChangeAvatar}
              image={currentUser?.avatar}
              onCancel={() => {
                setIsModalOpen(false);
              }}
            />
            <div>
              <div>{currentUser?.name}</div>
              <div>{currentUser?.about}</div>
            </div>
            <Button type="primary" onClick={() => {
              setIsModalOpenName(true);
            }} >Change</Button>
            <ChangeName
              visible={isModalOpenName}
              onChangeName={onChangeName}
              name={currentUser?.name}
              about={currentUser?.about}
              onCancel={() => {
                setIsModalOpenName(false);
              }}
            />
          </div>
        </div>
      </Header>
    </Layout>
  );
};
export default HeaderTitle;
