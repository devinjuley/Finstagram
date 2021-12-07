import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import thunk
import { getAllPostsThunk } from '../../store/post';

// import css
import './DiscoverPage.css';


function Discover() {
   const dispatch = useDispatch();
   const posts = useSelector(state => state.posts)

   const posts_arr = Object.assign([], posts)

   useEffect(() => {
      dispatch(getAllPostsThunk())
   }, [dispatch])

   return (
      <div>
         <h1>You made it here</h1>
         {posts_arr.map(post => (
            <div key={post?.id}>
               <img src={post?.images[0]?.image_url} alt='image post'/>
            </div>
         ))}
      </div>
   )
}

export default Discover;
