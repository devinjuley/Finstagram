import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// thunk import
import { addCommentThunk } from '../../store/post';

// css
import './singlePostComponent.css'

const CreateCommentForm = ({ post }) => {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user)
   const [commentContent, setCommentContent] = useState('');


   const handleCommentSubmission = (e) => {
      e.preventDefault()
      const comment = {
         content: commentContent,
         post_id: post.id,
         user_id: sessionUser.id
      }

      dispatch(addCommentThunk(comment))
      setCommentContent('')
   }

   return (
      <div>
         <form onSubmit={handleCommentSubmission} className='post-comment-form-dj'>
            <textarea
               className='post-comment-text-area-dj'
               value={commentContent}
               onChange={(e) => setCommentContent(e.target.value)}
               placeholder='Add a comment...'
            />
            <button type="submit" className='post-comment-button-dj'>Post</button>
         </form>
      </div>
   )
}

export default CreateCommentForm
