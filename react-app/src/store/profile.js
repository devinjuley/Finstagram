// constant
const GET_PROFILE_POSTS = 'profile/GET_PROFILE_POSTS';

// action creater
const getProfilePosts = (profile) => ({
    type: GET_PROFILE_POSTS,
    payload: profile
});

// thunk
const getProfilePostsThunk = (userId) => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}`);
    if(response.ok) {
        const posts = await response.json();
        dispatch(getProfilePosts(posts));
        return posts;
    }
};

// reducer
const initialState = {};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_POSTS: {
            const newState = {
                ...action.payload
            }
            return newState
        }
        default:
            return state
    }
};

export default profileReducer;
