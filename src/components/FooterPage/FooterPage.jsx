import React from 'react';
import s from "./style.module.css";
// import { Layout} from 'antd';
// const { Footer } = Layout;
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';


const footerStyle = {
  textAlign: 'center',
  color: '#000088',
 
};

const FooterPage=(()=>{
    return(
< div style={footerStyle}>
 This project ©2023 Created by Simakova Katerina 

</div>
    )}
);

export default FooterPage;