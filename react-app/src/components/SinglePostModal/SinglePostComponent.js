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
   let content;
   let buttons;

   const handleEdit = () => {
      content = (
         <>
            <EditSinglePost post={post}/>
         </>
      )
   };

   const handleDelete = () => {
      dispatch(deleteSinglePostThunk(post.id))
      hideForm()
   }

   if (sessionUser.id === post.user_id) {
      buttons = (
         <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
         </>
      )
   }
   content = (
      <>
         <img src={post?.images[0]?.image_url} />
         <div>{post?.content}</div>
         {buttons}
      </>
   )




   return (
      <>
         {content}
      </>
   );
};


export default SinglePost;
