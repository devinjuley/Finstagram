import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditSinglePost from './SinglePostEditComponent';
import CreateCommentForm from './CreateCommentComponent';
import CommentComponent from './CommentComponent';

// thunk import
import { deleteSinglePostThunk } from '../../store/post'

// impost CSS
import './singlePostComponent.css'

const SinglePost = ({ hideForm, setShowModal, post }) => {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const postComments = useSelector(state => state.posts[post.id].comments)
   const [showEditForm, setShowEditForm] = useState(false);
   // const [errors, setErrors] = useState([]);
   const commentsArray = Object.assign([], postComments)

   let content;
   let buttons;

   const handleEdit = () => {
      setShowEditForm(true)
   };

   const handleDelete = () => {
      dispatch(deleteSinglePostThunk(post.id))
      hideForm()
   };

   if (sessionUser.id === post.user_id) {
      buttons = (
         <div>
            {!showEditForm && (<button onClick={handleEdit} className='post-edit-and-delete-button-dj'>Edit</button>)}
            {!showEditForm && (<button onClick={handleDelete} className='post-edit-and-delete-button-dj'>Delete</button>)}
         </div>

      )
   }


   content = (
      <div className='single-post-parent-dj'>
         <img src={post?.images[0]?.image_url} className='single-post-image-in-modal-dj' alt='post' />
         <div className='single-post-child-2-dj'>
            <div className='comments-inner-div-dj'>

               <div className='single-post-owner-username-and-caption-dj'>
                  <img src={post?.user.profile_image_url} className='commented-user-profile-image-dj' alt='user-profile' />
                  <a href={`/users/${post?.user.id}`} className='single-post-owner-username-dj'>{post?.user?.username}</a>
               </div>
               <div className='div-for-scroll'>
                  <div className='single-post-owner-comment-dj'>
                     {post?.content?.length > 0 && (<img src={post?.user.profile_image_url} className='commented-user-profile-image-dj' alt='user-profile' />)}
                     <div>
                        <a href={`/users/${post?.user.id}`} className='single-post-comment-username-dj'>{!showEditForm && post?.content?.length > 0 && (post?.user?.username)}</a>
                        <span className='post-caption-dj'> {!showEditForm && post?.content?.length > 0 && (post?.content)}</span>
                        {buttons}
                     </div>
                     <div>
                        {showEditForm && (
                           <EditSinglePost post={post} setShowEditForm={setShowEditForm} />
                        )}
                     </div>
                  </div>
                  {commentsArray.map(comment => (
                     <div key={comment?.id} className='comment-username-and-comment-dj'>
                        <div>
                           <img src={comment?.user.profile_image_url} className='commented-user-profile-image-dj' alt='user-profile' />
                        </div>
                        <div>
                           <CommentComponent comment={comment} />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className='post-comment-dj'>
               <CreateCommentForm post={post} setShowModal={setShowModal} />
            </div>
         </div>
      </div>
   )

   return (
      <div>
         <div>
            {content}
         </div>
      </div>
   );
};


export default SinglePost;
