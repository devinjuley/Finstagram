// constants
const CREATE_POST = 'post/CREATE_POST';


// action creators
const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
})

// thunks
export const createPost = (newPost) => async (dispatch) => {
    const response = await fetch('', {
        
    })
}

// reducer
