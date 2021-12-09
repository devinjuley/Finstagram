import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        <div className='edit-comment-parent-dj'>
            <form onSubmit={handleEditSubmission}>
                <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditSinglePost
