// constants
const CREATE_POST = 'post/CREATE_POST';


// action creators
const createPost = (post) => ({
    type: CREATE_POST,
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
            console.log("this is the reponse obj", post)
            dispatch(createPost(post))
            return post;
        }
    } catch (err) {
        console.log(err)
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
        default:
            return state;
    }
}

export default postReducer;