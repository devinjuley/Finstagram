import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import thunk
import { getAllPostsThunk } from '../../store/post';

// import css
import './DiscoverPage.css';

//single post modal
import SinglePost from '../SinglePostModal/SinglePostComponent';
// import SinglePostModal from '../SinglePostModal';
import { Modal } from '../../context/Modal';
import '../../context/Modal.css'

export const SinglePostTile = ({ post }) => {
   const hideForm = () => setShowModal(false)
   const [showModal, setShowModal] = useState(false);
   return (
      <>
         <img src={post?.images[0]?.image_url} alt='image post' onClick={() => setShowModal(true)} />
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <SinglePost hideForm={hideForm} post={post} />
            </Modal>
         )}
      </>
   );

}

function Discover() {
   const dispatch = useDispatch();
   const posts = useSelector(state => state.posts)
   const [showModal, setShowModal] = useState(false);
   const hideForm = () => setShowModal(false)
   const posts_arr = Object.assign([], posts)

   useEffect(() => {
      dispatch(getAllPostsThunk())
   }, [dispatch])




   return (
      <div>
         <h1>You made it here</h1>
         {posts_arr.map(post => (
            <div key={post.id}>
               <SinglePostTile post={post} />
            </div>
         ))}
      </div>
   )
}

export default Discover;
