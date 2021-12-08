import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        <div>
            <form onSubmit={handleEditSubmission}>
                <textarea
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditSingleComment
