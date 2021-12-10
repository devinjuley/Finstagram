// constants
const ADD_FOLLOW = 'follows/ADD_FOLLOW';
const REMOVE_FOLLOW = 'follows/REMOVE_FOLLOW'
const GET_FOLLOWS = 'follows/GET_FOLLOWS'


// action creater
const addFollow = (follows) => ({
    type: ADD_FOLLOW,
    payload: follows
});

const removeFollow = (data) => ({
    type: REMOVE_FOLLOW,
    payload: data
});

const getFollows = (follows) => ({
    type: GET_FOLLOWS,
    payload: follows
});


// thunk
export const addFollowThunk = (payload) => async (dispatch) => {
    const response = await fetch(`/api/users/follows/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const follows = await response.json()
        dispatch(addFollow(follows));
        return follows;
    };
};

export const removeFollowThunk = (payload) => async (dispatch) => {
    const response = await fetch(`/api/users/${payload.follower_id}/follows/${payload.followed_id}/delete`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(removeFollow(data));
        return data;
    };
};

export const getFollowsThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/follows`)
    if (response.ok) {
        const follows = await response.json();
        dispatch(getFollows(follows))
        return follows
    }
}


// reducer
const initialState = {};
const followsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOLLOW: {
            const newState = {
                ...state,
                ...action.payload
            }
            // newState[action.payload.id] = action.payload.follows
            return newState
        }
        case REMOVE_FOLLOW: {
            const newState = {
                ...state
            }
            console.log(action.payload, '==============')
            if (action.payload.unfollowed_id in newState) {
                delete newState[action.payload.unfollowed_id]
            }
            return newState
        }
        case GET_FOLLOWS: {
            const newState = {
                ...state,
                ...action.payload
            }
            return newState;
        }
        default:
            return state
    }
}

export default followsReducer;


// const response = await fetch(`/api/users/${payload.follow_id}/follows/${payload.follower_id}`, {
