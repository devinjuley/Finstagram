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
      if (searchString !== '') {
         dispatch(getSearchResultsThunk(searchString))
      }
   }, [dispatch, searchString])


   return (
      <div>
         <input
            placeholder='Search'
            type='search'
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="search-input-field-th"
            onClick={(e) => setResultDivStyle({ visibility: 'visible' })}
         />
         <div style={resultDivStyle} className='results-field-om' >
            {(searchString !== '') && (searchResults?.map(user => (
               <a key={user?.id} href={`/users/${user.id}`} className='username-and-fullname-search-results-dj'>
                  <img src={user?.profile_image_url} className='commented-user-profile-image-dj' alt='user-profile'/>
                  <div>
                     <div className='search-results-person-username-dj'>{user?.username}</div>
                     <div className='search-results-person-fullname-dj'>{user?.first_name + ' ' + user?.last_name}</div>
                  </div>
               </a>
            )))}
         </div>
      </div>
   );
};

export default SearchField;
