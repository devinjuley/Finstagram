import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditSinglePost from './SinglePostEditComponent';
import CreateCommentForm from './CreateCommentComponent';
import CommentComponent from './CommentComponent';

// thunk import
import { deleteSinglePostThunk, deleteCommentThunk } from '../../store/post'

// impost CSS
import './singlePostComponent.css'

// import styles from './LoginForm.module.css'

const SinglePost = ({ hideForm, post }) => {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const postComments = useSelector(state => state.posts[post.id].comments)
   const [errors, setErrors] = useState([]);
   const [showEditForm, setShowEditForm] = useState(false);

   // const commentsArray = Object.assign([], post.comments)
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
         <img src={post?.images[0]?.image_url} className='single-post-image-in-modal-dj' />
         <div className='single-post-child-2-dj'>
            <div className='comments-inner-div-dj'>
               {!showEditForm && (

                  <div className='single-post-caption-dj'>{post?.content}</div>
               )}
               {commentsArray.map(comment => (
                  <div key={comment?.id} className='comment-username-and-comment-dj'>
                     <div>
                        <img src={comment?.user.profile_image_url} className='commented-user-profile-image-dj' />
                     </div>
                     <div>
                        {/* <div className='single-post-comment-username-dj'>{comment?.user?.username}</div> */}
                     </div>
                     <div>
                        <CommentComponent comment={comment} />
                     </div>

                  </div>
               ))}
               {buttons}
            </div>
            <div className='post-comment-dj'>
               {!showEditForm && (
                  <CreateCommentForm post={post} />
               )}
            </div>
         </div>
      </div>
   )

   return (
      <div>
         <div>
            {content}
         </div>
         <div>
            {showEditForm && (
               <EditSinglePost post={post} setShowEditForm={setShowEditForm} />
            )}
         </div>

      </div>
   );
};


export default SinglePost;
