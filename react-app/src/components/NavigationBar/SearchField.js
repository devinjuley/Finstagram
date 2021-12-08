import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// import thunk



const SearchField = () => {
   const history = useHistory();
   const [searchString, setSearchString] = useState('');

   const handeSubmit = (e) => {
      e.preventDefault()
      // dispatch search thunk
      return
   }

   return (
      <div>
         <form onSubmit={handeSubmit}>
            <input
               placeholder='Search...'
               type='search'
               value={searchString}
               onChange={(e) => setSearchString(e.target.value)}
            />
         </form>
      </div>
   );
};

export default SearchField;
