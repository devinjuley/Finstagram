import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditSinglePost from './SinglePostEditComponent';
import CreateCommentForm from './CreateCommentComponent';
import CommentComponent from './CommentComponent';

// thunk import
import { deleteSinglePostThunk, deleteCommentThunk } from '../../store/post'

// impost CSS
import '../../context/Modal.css'

// import styles from './LoginForm.module.css'

const SinglePost = ({ hideForm, post }) => {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const [errors, setErrors] = useState([]);
   const [showEditForm, setShowEditForm] = useState(false);

   const commentsArray = Object.assign([], post.comments)

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
            {!showEditForm && (<button onClick={handleEdit}>Edit</button>)}
            {!showEditForm && (<button onClick={handleDelete}>Delete</button>)}
         </div>

      )
   }


   content = (
      <div>
         <div>
            <img src={post?.images[0]?.image_url} />
         </div>
         <div>
            {commentsArray.map(comment => (
               <div key={comment?.id}>
                  <div>
                     {comment?.user?.username}
                  </div>
                  <div>
                     <CommentComponent comment={comment}/>
                  </div>

               </div>
            ))}
         </div>
         <div>
            {!showEditForm && (<div>{post?.content}</div>)}
         </div>
         <div>
            {buttons}
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
         <div>
            {!showEditForm && (
               <CreateCommentForm post={post} />
            )}
         </div>

      </div>
   );
};


export default SinglePost;
