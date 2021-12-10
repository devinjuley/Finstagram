// constants
const ADD_FOLLOW = 'follows/ADD_FOLLOW';
const GET_FOLLOWS = 'follows/GET_FOLLOWS'


// action creater
const addFollow = (user) => ({
    type: ADD_FOLLOW,
    payload: user
});

const getFollows = (user) => ({
    type: GET_FOLLOWS,
    payload: user
})


// thunk
export const addFollowThunk = (payload) => async (dispatch) => {
    const response = await fetch(`/api/users/follows/new`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const user = await response.json()
        dispatch(addFollow(user));
        return user;
    };
};

export const getFollowsThunk = (payload) => async (dispatch) => {
    // const response = await
}


// reducer
const initialState = {};
const followsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOLLOW: {
            const newState = {
                ...state,
            }
            newState[action.payload.id] = action.payload.follows
            return newState
        }
        default:
            return state
    }
}

export default followsReducer;


// const response = await fetch(`/api/users/${payload.follow_id}/follows/${payload.follower_id}`, {
