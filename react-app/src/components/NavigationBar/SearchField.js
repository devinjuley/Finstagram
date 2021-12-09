import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import thunk
import { getSearchResultsThunk } from '../../store/search'


const SearchField = () => {
   const dispatch = useDispatch();
   const searchResults = useSelector(state => state.search)
   const history = useHistory();
   const [searchString, setSearchString] = useState('');

   useEffect(() => {
      if (searchString === '') {
         setSearchString(null)
         dispatch(getSearchResultsThunk(null))
      } else {
         dispatch(getSearchResultsThunk(searchString))
      }
   }, [dispatch, searchString])

   return (
      <div>
         <input
            placeholder='Search...'
            type='search'
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
         />
      </div>
   );
};

export default SearchField;
