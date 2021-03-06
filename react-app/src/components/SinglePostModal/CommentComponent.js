import { useState } from 'react';
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
                    <button onClick={() => setShowCommentEditForm(true)} className='comment-edit-and-delete-button-dj'>Edit</button>
                    <button onClick={handleDeleteComment} value={comment.id} className='comment-edit-and-delete-button-dj'>Delete</button>
                </div>
            )
        }
    }

    return (
        <div className='comment-div-dj'>
            <a href={`/users/${comment?.user.id}`} className='single-post-comment-username-dj'>{!showCommentEditForm && (comment?.user?.username)}</a>
            <span className='comment-div-dj'> {!showCommentEditForm && (comment?.content)}</span>
            {!showCommentEditForm && (commentChecker(comment))}
            {!showCommentEditForm && (commentButtons)}
            {showCommentEditForm && (
                <EditSingleComment comment={comment} setShowCommentEditForm={setShowCommentEditForm} />
            )}
        </div>
    )
}

export default CommentComponent
