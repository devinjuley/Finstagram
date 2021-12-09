import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentThunk } from '../../store/post';
import EditSingleComment from './SingleCommentEditComponent';


const CommentComponent = ({ comment }) => {
    const dispatch = useDispatch();
    const [showCommentEditForm, setShowCommentEditForm] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    let commentButtons;

    const handleDeleteComment = (e) => {
        dispatch(deleteCommentThunk(e.target.value))
    }

    const commentChecker = (comment) => {
        if (sessionUser.id === comment.user.id) {
            commentButtons = (
                <div>
                    <button onClick={() => setShowCommentEditForm(true)}>Edit</button>
                    <button onClick={handleDeleteComment} value={comment.id}>Delete</button>
                </div>
            )
        }
    }

    return (
        <div>
            {!showCommentEditForm && (comment?.content)}
            {!showCommentEditForm && (commentChecker(comment))}
            {!showCommentEditForm && (commentButtons)}
            {showCommentEditForm && (
                <EditSingleComment comment={comment} setShowCommentEditForm={setShowCommentEditForm} />
            )}
        </div>
    )
}

export default CommentComponent
