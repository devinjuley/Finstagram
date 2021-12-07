// constants
const CREATE_POST = 'post/CREATE_POST';
const GET_ALL_POSTS = 'post/GET_ALL_POSTS';


// action creators
const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
});

const getAllPosts = (posts) => ({
    type: GET_ALL_POSTS,
    payload: posts
});

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

export const getAllPostsThunk = () => async(dispatch) => {
    const response = await fetch('/api/posts/discover');
    if (response.ok) {
        const posts = await response.json();
        dispatch(getAllPosts(posts));
        return posts;
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
        default:
            return state;
    }
}

export default postReducer;
