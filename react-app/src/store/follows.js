// constants
const ADD_FOLLOW = 'follows/ADD_FOLLOW';

// action creater
const addFollow = (user) => ({
    type: ADD_FOLLOW,
    payload: user
});

// thunk
export const addFollowThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/follows/${userId}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userId)
    });
    if (response.ok) {
        const user = await response.json()
        dispatch(addFollow(user));
        return user;
    } else {
        console.log('ya fucked up')
    }
}

// reducer
const initialState = {};
const followsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOLLOW: {
            const newState = {
                ...state,
            }
            newState[action.payload.follows] = action.payload.follows
            return newState
        }
        default:
            return state
    }
}

export default followsReducer;
