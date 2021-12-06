import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const SearchField = () => {
   const history = useHistory();
   const [searchString, setSearchString] = useState('');

   const updateSearch = (e) => {
      setSearchString(e.target.value);

      // TO DO: create search funtion for activities

      return
   }

   return (
      <>
         <input
            placeholder='Search...'
            type='text'
            value={searchString}
            onChange={updateSearch}
         />
      </>
   );
};

export default SearchField;
