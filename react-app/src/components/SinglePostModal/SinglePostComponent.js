import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// thunk import
import { createNewPost } from '../../store/post'
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
   const handleDelete = () => {

   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
         user_id: sessionUser.id,
         content: caption,
         image_url,
      };
      setErrors([]);
      let submittedPost = await dispatch(createNewPost(newPost))
         .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
         });
      if (submittedPost) {
         hideForm()
      }
   }


   return (
      <div>
         <img src={post?.images[0]?.image_url} />
         <div>{post?.content}</div>
         <button onClick={handleEdit}>edit</button>
         <button onClick={handleDelete}>delete</button>

      </div>
   );
};


export default SinglePost;
