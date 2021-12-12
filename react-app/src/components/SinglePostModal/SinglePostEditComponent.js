import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editSinglePostThunk } from '../../store/post';
import './singlePostComponent.css'

const EditSinglePost = ({ setShowEditForm, post }) => {
    const dispatch = useDispatch();
    const [postContent, setPostContent] = useState(post.content);


    const handleEditSubmission = (e) => {
        e.preventDefault()
        const editPost = {
            content: postContent,
            post_id: post.id
        }

        dispatch(editSinglePostThunk(editPost))
        setShowEditForm(false)
    }

    return (
        // <div>
        <form onSubmit={handleEditSubmission} className='edit-comment-parent-dj'>
            <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className='edit-single-post-textarea-dj'
            />
            <button type="submit" className='edit-post-submit-button-dj'>Submit</button>
        </form>
        // </div>
    )
}

export default EditSinglePost
