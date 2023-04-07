import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from '../../components/PostList/PostList';
import { Button} from 'antd';
import { CardContext } from '../../Untils/cardContext/cardContext';
import { UserContext } from '../../Untils/UserContext/userContext';

export const Favorite = () => {
  const { favorites, handlePostLike, handlePostDelete } = useContext(CardContext);

  const { currentUser } = useContext(UserContext);

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>Избранное</h1>
        <Button type="primary" style={{ margin: "20px 0", backgroundColor: "violet" }}
          onClick={handleClick} >
          назад
        </Button>
        <div className='content__cards'>
        <PostList
          handlePostLike={handlePostLike}
          goods = {favorites}
          currentUser={currentUser}
          handlePostDelete = {handlePostDelete}
        />
        </div>
      </div>
    </>
  );
};