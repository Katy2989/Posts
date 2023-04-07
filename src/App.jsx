import React, { useEffect, useState } from 'react';
import './App.css';
import { Layout, Space } from 'antd';
import HeaderTitle from "./components/HeaderTitle/Header";
import FooterPage from './components/FooterPage/FooterPage';
import api from './Untils/api';
import PaginationPost from './components/PaginationPost/PaginationPost';
import BreadcrumbPost from './components/BreadcrumbPost/BreadcrumbPost';
import useDebounce from './Untils/Hooks/useDebounce';
import { CreatePostButton } from './components/CreatePostButton/CreatePostButton';
import { Navigate, Route, Routes, } from 'react-router-dom';
import { NotFoundPage } from './Pages/NotFoundPages/NotFoundPages';
import Search from './components/Search/Search';
import { PostCardPages } from './Pages/PostCardPages/PostCardPages';
import { PostListPage } from './Pages/PostListPages/PostListPages';
import { UserContext } from './Untils/UserContext/userContext';
import { CardContext } from './Untils/cardContext/cardContext';
import { Favorite } from './Pages/Favorite/Favorite';
import { isLiked } from './Untils/utils';

const { Footer, Content } = Layout;

function App() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalQuery, setTotalQuery] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const debounceSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    Promise.all([api.getPostList(page, pageLimit), api.getUserInfo()]).then(([postData, userData]) => {
      setPosts(postData.posts);
      setCurrentUser(userData);
      setTotalQuery(postData.total);
      const favProducts = postData.posts.filter((product) =>
      isLiked(product.likes, userData._id));
      setFavorites(favProducts);

    });
  }, [page, pageLimit]);

  const handleRequest = () => {
    api.search(searchQuery, page, pageLimit).then((data) => setPosts(data.posts));
  };

  const handleCreatePost = (values) => {
    const valuesPost = {
      ...values,
      tags: values.tags?.split(",").map((tag) => tag.trim()),
    };
    api.addPost(valuesPost).then((newData) => {
      const newPost = [newData].concat(posts);
      setPosts(newPost);
    });

    setShowModal(false);
  };

  useEffect(() => {
    handleRequest();
  }, [debounceSearchQuery]
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
    console.log("click");
  };

  const handleInput = (inputValue) => {
    setSearchQuery(inputValue);
  };

  function handlePostLike(postCards) {

    const isLiked = postCards.likes.some((id) => id === currentUser._id);
    api.changeLikePost(postCards._id, isLiked).then((newPost) => {
      const newPostsState = posts.map((postState) => {
        return postState._id === newPost._id ? newPost : postState;
      });

      if (!isLiked) {
        setFavorites((prevState) => [newPost, ...prevState]);
      } else
        setFavorites((prevState) =>
          prevState.filter((post) => post._id !== newPost._id)
        );

      setPosts(newPostsState);

    });
  }

  function handlePostDelete(post) {

    api.deletePost(post).then(() => {
      const deleteCard = posts.filter((obj) => { return obj._id !== post });
      setPosts(deleteCard);
    }).catch((err) => console.log(err));
  }

  const valueProvider = {
    posts,
    setPosts,
    favorites,
    handlePostLike: handlePostLike,
    handlePostDelete: handlePostDelete,
  };

  return (
    <CardContext.Provider value={valueProvider}>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Layout>
          <HeaderTitle {...currentUser} />
          <Content style={{ padding: "0 100px" }}>

            <BreadcrumbPost  >
              <Search onSubmit={handleFormSubmit} onInput={handleInput} />
            </BreadcrumbPost>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <CreatePostButton
                      handleCreatePost={handleCreatePost}
                      showModal={showModal}
                      setShowModal={setShowModal} />
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{
                      }}>
                      <PostListPage goods={posts}
                        currentUser={currentUser}
                        handlePostLike={handlePostLike}
                        handlePostDelete={handlePostDelete}
                        setPosts={setPosts}
                      />
                      <PaginationPost
                        totalQuery={totalQuery}
                        page={page}
                        pageLimit={pageLimit}
                        setPage={setPage}
                        setPageLimit={setPageLimit} />
                    </Space>
                  </>
                }
              />
              <Route
                path='/posts/:postID'
                element={<PostCardPages
                  posts={posts}
                  handlePostLike={handlePostLike}
                />}
              ></Route>
              <Route path='/favorites' element={<Favorite />}></Route>
              <Route
                path="*"
                element={<NotFoundPage style={{ textAlign: "center" }} />}
              />
            </Routes>
          </Content>
          <Footer style={{ padding: "12px 50px", }}>

            <FooterPage />
          </Footer>
        </Layout>
      </UserContext.Provider>
    </CardContext.Provider>

  );
}

export default App;
