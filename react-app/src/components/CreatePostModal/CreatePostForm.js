import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// thunk import
// import { login } from '../../store/session'

// import styles from './LoginForm.module.css'

const CreatePostForm = () => {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const [caption, setCaption] = useState('');
   const [image_url, setImage_URL] = useState('');
   const [errors, setErrors] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const newPost = {
         user_id: sessionUser.id,
         content: caption,
         image_url,
      };
      setErrors([]);
      // return dispatch(login({ image_url, caption }))
      //    .catch(async (res) => {
      //       const data = await res.json();
      //       if (data && data.errors) setErrors(data.errors);
      //    });
   }


   return (
      <div >
         {console.log(sessionUser)}
         <form onSubmit={handleSubmit}>
            <input type='file' />
            <input
               type='text'
               value={image_url}
               onChange={(e) => setImage_URL(e.target.value)}
               placeholder='This is for testing'
            />
            <textarea
               value={caption}
               placeholder='Add a caption to this photo!'
               onChange={(e) => setCaption(e.target.value)}
            />
            <button type='submit'>
               Submit
            </button>
         </form>
      </div>
   );
};


export default CreatePostForm;
