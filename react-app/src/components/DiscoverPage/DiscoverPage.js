import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
      <div className='single-post-tile-dj'>
         <div>
            <img src={post?.images[0]?.image_url} alt='post' onClick={() => setShowModal(true)} className='single-post-image-dj' />
            {showModal && (
               <Modal onClose={() => setShowModal(false)}>
                  <SinglePost hideForm={hideForm} post={post} setShowModal={setShowModal} />
               </Modal>
            )}
         </div>
      </div>
   );

}

function Discover() {
   const dispatch = useDispatch();
   const posts = useSelector(state => state.posts);

   const posts_arr = Object.assign([], posts);
   // posts_arr.reverse();
   posts_arr.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
   })

   useEffect(() => {
      dispatch(getAllPostsThunk())
   }, [dispatch])




   return (
      <div className='discover-parent-div-dj'>
         {posts_arr.map(post => (
            <div key={post.id}>
               <SinglePostTile post={post} />
            </div>
         ))}
      </div>
   )
}

export default Discover;
