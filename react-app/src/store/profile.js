// constant
const GET_PROFILE = 'profile/GET_PROFILE';
const REMOVE_PROFILE = 'profile/REMOVE_PROFILE'

// action creater
const getProfile = (profile) => ({
    type: GET_PROFILE,
    payload: profile
});

const removeProfile = () => ({
    type: REMOVE_PROFILE
})


// thunk
export const getProfileThunk = (userId) => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}`);
    if(response.ok) {
        const profile = await response.json();
        dispatch(getProfile(profile));
        return profile;
    }
};

export const removeProfileThunk = () => (dispatch) => {
    dispatch(removeProfile());
}

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
        case REMOVE_PROFILE: {
            return {}
        }
        default:
            return state
    }
};

export default profileReducer;
