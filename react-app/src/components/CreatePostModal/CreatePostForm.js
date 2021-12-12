import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// thunk import
import { createNewPost } from '../../store/post'

//css
import './CreatePost.css'

const CreatePostForm = ({ hideForm }) => {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const [caption, setCaption] = useState('');
   const [image_url, setImage_URL] = useState('');
   const [errors, setErrors] = useState([]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
         user_id: sessionUser.id,
         content: caption,
         image_url,
      };
      setErrors([]);
      let submittedPost = await dispatch(createNewPost(newPost))
         // .catch(async (res) => {
         //    const data = await res.json();
         //    if (data && data.errors) setErrors(data.errors);
         // });
         .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
               setErrors(data.errors)
               return
            };
         });
      if (!submittedPost) {
         hideForm()
      }
   }


   return (
      <div className='make-a-post-grandparent-dj'>
         <div className='make-a-post-parent-om'>
            <div className='make-a-post-finstagram-om'>
               Make a post!
            </div>
            <form onSubmit={handleSubmit} className='make-a-post-form-dj'>
               <div>
                  {errors.map((error, ind) => (
                     <div key={ind}>{error}</div>
                  ))}
               </div>
               {/* <input type='file' /> */}
               <div className='make-a-post-form-dj'>
                  <div>
                     <input
                        type='text'
                        value={image_url}
                        onChange={(e) => setImage_URL(e.target.value)}
                        placeholder='provide an image URL'
                        className='create-form-input-om'
                     />
                  </div>
                  <textarea
                     value={caption}
                     placeholder='Add a caption to this photo!'
                     onChange={(e) => setCaption(e.target.value)}
                     className='create-form-input-textarea-om'
                  />
               </div>
               <button type='submit' className='signup-buttons-om'>
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};


export default CreatePostForm;
