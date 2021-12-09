// constant
const GET_PROFILE = 'profile/GET_PROFILE';

// action creater
const getProfile = (profile) => ({
    type: GET_PROFILE,
    payload: profile
});

// thunk
export const getProfileThunk = (userId) => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}`);
    if(response.ok) {
        const profile = await response.json();
        dispatch(getProfile(profile));
        return profile;
    }
};


// reducer
const initialState = {};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE: {
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
