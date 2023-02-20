import React from 'react';
import { Pagination } from 'antd';
import s from "./style.module.css";
const PaginationPost = () => {
    return(
    <>
      <Pagination
        total={85}
        showTotal={(total) => `Total ${total} items`}
        defaultPageSize={20}
        defaultCurrent={1}
        style={{justifyContent:"center"}}
        className={s.pag}
      />
    </>);
};
  
  export default PaginationPost;