import React, { useEffect, useState } from 'react';
import './App.css';
import { Layout, Space } from 'antd';
import HeaderTitle from "./components/HeaderTitle/Header";
import FooterPage from './components/FooterPage/FooterPage';
import api from './Untils/api';
import PostListPage from './components/PostListPage/PostListPage';
import PaginationPost from './components/PaginationPost/PaginationPost';
import BreadcrumbPost from './components/BreadcrumbPost/BreadcrumbPost';
import Search from 'antd/es/transfer/search';
import useDebounce from './assets/Hooks/useDebounce';
import { CreatePostButton } from './components/CreatePostButton/CreatePostButton';

const { Footer, Content } = Layout;

function App() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(550);
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const debounceSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    Promise.all([api.getPostList(page, pageLimit), api.getUserInfo()]).then(([postData, userData]) => {
      setPosts(postData.posts);
      setCurrentUser(userData);
    });
  }, [page, pageLimit]);

  const handleRequest = () => {
    api.search(searchQuery, page, pageLimit).then((data) => setPosts(data.posts));
  };

  const handleCreatePost = (values) => {
    values = {
      ...values,
      tags: values.tags?.split(",").map((tag) =>tag.trim()),
    };
    console.log(values, 1);
    api.addPost(values).then((newData) =>
      setPosts((prevState) => [...prevState, newData])).catch((err) => console.log(err));

    setShowModal(false);
  };

  useEffect(() => {
    handleRequest();
  }, [debounceSearchQuery]
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  };

  const handleInput = (inputValue) => {
    setSearchQuery(inputValue);
    console.log("input", inputValue);

  };

  function handlePostLike(postCards) {

    const isLiked = postCards.likes.some((id) => id === currentUser._id);
    api.changeLikePost(postCards._id, isLiked).then((newPost) => {
      const newPostsState = posts.map((postState) => {
        return postState._id === newPost._id ? newPost : postState;
      });
      setPosts(newPostsState);
      console.log(newPostsState, 3);
    });
  }

  function handlePostDelete(post) {

    api.deletePost(post).then(() => {
      const deleteCard = posts.filter((obj) => { return obj._id !== post });
      setPosts(deleteCard);
    }).catch((err) => console.log(err));
  }

    return (
      <Layout>

        <HeaderTitle {...currentUser} />
        <Content style={{ padding: "0 100px" }}>
          <BreadcrumbPost onSubmit={handleFormSubmit}
            onInput={handleInput} >

          </BreadcrumbPost>
          <CreatePostButton
            handleCreatePost={handleCreatePost}
            showModal={showModal}
            setShowModal={setShowModal} />

          <Space
            direction="vertical"
            size="middle"
            style={{

            }}>

            <PostListPage data={posts}
              currentUser={currentUser}
              handlePostLike={handlePostLike}
              handlePostDelete={handlePostDelete} />

            <PaginationPost />

          </Space>
        </Content>

        <Footer style={{ padding: "12px 50px", }}>

          <FooterPage />
        </Footer>
      </Layout>

    );
  }

  export default App;
