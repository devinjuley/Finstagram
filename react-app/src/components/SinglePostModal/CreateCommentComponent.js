import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// thunk import
// import { editSinglePostThunk } from '../../store/post';

const CreateCommentForm = ({ post }) => {
   const dispatch = useDispatch();
   const [commentContent, setCommentContent] = useState('');


   const handleCommentSubmission = (e) => {
      e.preventDefault()
      // const editPost = {
      //    content: postContent,
      //    post_id: post.id
      // }

      // dispatch(editSinglePostThunk(editPost))
      // setShowEditForm(false)
   }

   return (
      <div>
         <form onSubmit={handleCommentSubmission}>
            <textarea
               value={commentContent}
               onChange={(e) => setCommentContent(e.target.value)}
               placeholder='Add a comment...'
            />
            <button type="submit">Post</button>
         </form>
      </div>
   )
}

export default CreateCommentForm
