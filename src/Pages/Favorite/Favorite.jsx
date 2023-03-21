import { useContext } from 'react';
import PostList from '../../components/PostList/PostList';
import { CardContext } from '../../Untils/cardContext/cardContext';
import { UserContext } from '../../Untils/UserContext/userContext';

export const Favorite = () => {
  const { favorites, handlePostLike } = useContext(CardContext);

// console.log(favorites, handleProductLike);
  const { currentUser } = useContext(UserContext);

  
  console.log('favorites in favorites page', favorites);

  return (
    <>
      <div>
        <h3>Избранное</h3>
        <div className='content__cards'>
        <PostList
          handlePostLike={handlePostLike}
          goods = {favorites}
          currentUser={currentUser}
        />
        </div>
      </div>
    </>
  );
};