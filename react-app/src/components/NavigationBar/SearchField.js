import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import thunk
import { getSearchResultsThunk } from '../../store/search'

import './NavBar.css'


const SearchField = () => {
   const dispatch = useDispatch();
   const searchResults = useSelector(state => state?.search?.users)
   const [searchString, setSearchString] = useState('');
   const [resultDivStyle, setResultDivStyle] = useState({ visibility: 'hidden' })

   useEffect(() => {
      if (searchString === '') {
         setSearchString(null)
         // dispatch(getSearchResultsThunk(null))
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
            className="search-input-field-th"
            onClick={(e) => setResultDivStyle({ visibility: 'visible' })}
         />
         <div style={resultDivStyle} >
            {searchResults?.map(user => (
               <a key={user?.id} href={`/users/${user.id}`}>
                  <div>{user?.username}</div>
                  <div>{user?.first_name + ' ' + user?.last_name}</div>
               </a>
            ))}
         </div>
      </div>
   );
};

export default SearchField;
