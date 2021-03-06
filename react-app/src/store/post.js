// constants
const CREATE_POST = 'post/CREATE_POST';
const GET_ALL_POSTS = 'post/GET_ALL_POSTS';
const DELETE_SINGLE_POST = 'post/DELETE_SINGLE_POST';
const EDIT_SINGLE_POST = 'post/EDIT_SINGLE_POST';
const ADD_COMMENT = 'post/ADD_COMMENT'
const DELETE_COMMENT = 'post/DELETE_COMMENT';
const EDIT_COMMENT = 'post/EDIT_COMMENT';
const GET_PROFILE_POSTS = 'post/GET_PROFILE_POSTS';
const REMOVE_ALL_POSTS = 'post/REMOVE_ALL_POSTS';


// action creators
const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
});

const getAllPosts = (posts) => ({
    type: GET_ALL_POSTS,
    payload: posts
});

const getProfilePosts = (posts) => ({
    type: GET_PROFILE_POSTS,
    payload: posts
});

const deleteSinglePost = (post) => ({
    type: DELETE_SINGLE_POST,
    payload: post
});

const editSinglePost = (post) => ({
    type: EDIT_SINGLE_POST,
    payload: post
});

const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
});

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    payload: comment
});

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    payload: comment
});

const removeAllPosts = () =>({
    type: REMOVE_ALL_POSTS
})


// thunks
export const createNewPost = (newPost) => async (dispatch) => {
    try {
        const response = await fetch('/api/posts/new', {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: newPost
        });
        if (response.ok) {
            const post = await response.json();
            dispatch(createPost(post))
        } else if (response.status < 500) {
            const data = await response.json()
            if (data.errors) {
                return data.errors
            }
        }
    } catch (err) {
        console.log(err)
    }
};

export const getAllPostsThunk = () => async (dispatch) => {
    const response = await fetch('/api/posts/discover');
    if (response.ok) {
        const posts = await response.json();
        dispatch(getAllPosts(posts));
        return posts;
    }
};

export const getProfilePostsThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/posts`)
    if (response.ok) {
        const posts = await response.json();
        dispatch(getProfilePosts(posts));
        return posts
    };
};

export const deleteSinglePostThunk = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/delete`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const post = await response.json()
        dispatch(deleteSinglePost(post))
        return post
    }
};

export const editSinglePostThunk = (post) => async (dispatch) => {
    const response = await fetch(`/api/posts/${post.post_id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    });

    if (response.ok) {
        const editedPost = await response.json();
        dispatch(editSinglePost(editedPost));
        return editedPost;
    }
};

export const addCommentThunk = (comment) => async (dispatch) => {
    const response = await fetch('/api/comments/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(addComment(comment));
        return comment;
    }
};

export const deleteCommentThunk = (commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}/delete`, {
        method: 'DELETE'
    })
    if (response.ok) {
        const comment = await response.json()
        // console.log('this is in the thunk', comment)
        dispatch(deleteComment(comment))
        return comment
    }
};

export const editCommentThunk = (comment) => async (dispatch) => {
    const response = await fetch(`/api/comments/${comment.id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    });

    if (response.ok) {
        const comment = await response.json()
        dispatch(editComment(comment));
        return comment
    }
};

export const removeAllPostsThunk = () => (dispatch) => {
    dispatch(removeAllPosts())
}


const initialState = {};
// reducer
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: {
            const newState = {
                ...state,
                [action.payload.id]: action.payload
            }
            return newState;
        }
        case GET_ALL_POSTS: {
            const newState = {
                ...state,
                ...action.payload.posts
            }
            return newState;
        }
        case DELETE_SINGLE_POST: {
            const newState = {
                ...state
            }
            delete newState[action.payload.id]
            return newState
        }
        case EDIT_SINGLE_POST: {
            const newState = {
                ...state,
                [action.payload.id]: action.payload
            }
            return newState;
        }
        case ADD_COMMENT: {
            const postId = action.payload.post_id
            const newState = { ...state }
            newState[postId].comments[action.payload.id] = action.payload;
            return newState
        }
        case DELETE_COMMENT: {
            const postId = action.payload.post_id
            const newState = {
                ...state
            }
            delete newState[postId].comments[action.payload.id]
            return newState
        }
        case EDIT_COMMENT: {
            const postId = action.payload.post_id
            const newState = {
                ...state
            }
            newState[postId].comments[action.payload.id] = action.payload
            return newState
        }
        case GET_PROFILE_POSTS: {
            const newState = {
                // ...state,
                ...action.payload.posts
            };
            return newState
        }
        case REMOVE_ALL_POSTS: {
            return {}
        }
        default:
            return state;
    }
}

export default postReducer;
