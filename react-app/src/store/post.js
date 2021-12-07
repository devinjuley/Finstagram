// constants
const CREATE_POST = 'post/CREATE_POST';
const GET_ALL_POSTS = 'post/GET_ALL_POSTS';
const DELETE_SINGLE_POST = 'post/DELETE_SINGLE_POST'


// action creators
const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
});

const getAllPosts = (posts) => ({
    type: GET_ALL_POSTS,
    payload: posts
});

const deleteSinglePost = (post) => ({
    type: DELETE_SINGLE_POST,
    payload: post
})

// thunks
export const createNewPost = (newPost) => async (dispatch) => {
    try {
        const response = await fetch('/api/posts/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)

        });

        if (response.ok) {
            const post = await response.json();
            dispatch(createPost(post))
            return post;
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
}

export const deleteSinglePostThunk = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/delete`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const post = await response.json()
        console.log('---------------')
        console.log(post)
        console.log('===============')
        dispatch(deleteSinglePost(post))
        return post
    }
}


const initialState = {}
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
        default:
            return state;
    }
}

export default postReducer;
