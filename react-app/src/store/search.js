//constants
const SEARCH_RESULTS = 'search/SEARCH_RESULTS';


//actions
const getSearchResults = (results) => ({
   type: SEARCH_RESULTS,
   payload: results
});

// thunks
export const getSearchResultsThunk =(searchTerm) => async (dispatch) => {
   const response = await fetch(`/api/users/${searchTerm}`)

   if(response.ok) {
      const results = await response.json()
      dispatch(getSearchResults(results))
      return results
   }
};


const initialState = {};
// reducer
const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEARCH_RESULTS: {
         const newState = {...action.payload}

         return newState
      }
      default:
         return state
   }
};

export default searchReducer
