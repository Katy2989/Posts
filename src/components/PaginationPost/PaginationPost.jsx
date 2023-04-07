import React from 'react';
import { Pagination } from 'antd';
import s from "./style.module.css";
const PaginationPost = ( {totalQuery, pageLimit, setPageLimit, page,setPage}) =>{
  
  function onShowSizeChange(current, pageSize) {
    setPageLimit(pageSize);
}
    return(
    <>
      <Pagination
        pageSize={pageLimit}
        total={totalQuery}
        showTotal={(total) => `Total ${total} items`}
        pageSizeOptions={[3, 5, 10, 15, 20,50, 100]}
        style={{justifyContent:"center"}}
        className={s.pag}
        onShowSizeChange={onShowSizeChange}   
        onChange={(num) => setPage(num)}
        current={page}
      />
    </>);
};
  
  export default PaginationPost;