import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCommentThunk } from '../../store/post';


const EditSingleComment = ({ comment, setShowCommentEditForm }) => {
    const dispatch = useDispatch();
    const [commentContent, setCommentContent] = useState(comment.content);

    const handleEditSubmission = (e) => {
        e.preventDefault()
        const editedComment = {
            content: commentContent,
            id: comment.id
        }

        dispatch(editCommentThunk(editedComment))
        setShowCommentEditForm(false)
    }

    return (
        <div className='post-a-comment-parent-dj'>
            <form onSubmit={handleEditSubmission} className='post-comment-form-dj'>
                <textarea
                    className='edit-comment-text-area-dj'
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                />
                <button type="submit" className='edit-comment-button-dj'>Submit</button>
            </form>
        </div>
    )
}

export default EditSingleComment
