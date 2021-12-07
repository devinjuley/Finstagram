import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// thunk import
import { deleteSinglePostThunk } from '../../store/post'

// impost CSS
import '../../context/Modal.css'

// import styles from './LoginForm.module.css'

const SinglePost = ({ hideForm, post }) => {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const [caption, setCaption] = useState('');
   const [image_url, setImage_URL] = useState('');
   const [errors, setErrors] = useState([]);

   const handleEdit = () => {

   }
   
   const handleDelete = async () => {
      const deleted_post = await dispatch(deleteSinglePostThunk(post.id))
      hideForm()
   }

   let buttons
   if (sessionUser.id === post.user_id) {
      buttons = (
         <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
         </>
      )
   }

   return (
      <div>
         <img src={post?.images[0]?.image_url} />
         <div>{post?.content}</div>
         {buttons}
      </div>
   );
};


export default SinglePost;
