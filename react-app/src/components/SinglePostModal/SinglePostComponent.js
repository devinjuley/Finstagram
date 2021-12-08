import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditSinglePost from './SinglePostEditComponent';
// thunk import
import { deleteSinglePostThunk } from '../../store/post'

// impost CSS
import '../../context/Modal.css'

// import styles from './LoginForm.module.css'

const SinglePost = ({ hideForm, post }) => {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const [errors, setErrors] = useState([]);
   const [postContent, setPostContent] = useState(post.content);
   const [showEditForm, setShowEditForm] = useState(false);
   const handleEditSubmission = (e) => {

   }
   let content;
   let buttons;


   const handleEdit = () => {
      setShowEditForm(true)
   };

   const handleDelete = () => {
      dispatch(deleteSinglePostThunk(post.id))
      hideForm()
   }

   if (sessionUser.id === post.user_id) {
      buttons = (
         <>
            {!showEditForm && (<button onClick={handleEdit}>Edit</button>)}
            {!showEditForm && (<button onClick={handleDelete}>Delete</button>)}
         </>

      )
   }


   content = (
      <>
         <img src={post?.images[0]?.image_url} />
         {!showEditForm && (<div>{post?.content}</div>)}
         {buttons}
      </>
   )


   return (
      <>
         {content}
         {showEditForm && (
            <EditSinglePost post={post} setShowEditForm={setShowEditForm} />
         )}
      </>
   );
};


export default SinglePost;
