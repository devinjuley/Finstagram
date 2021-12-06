import { useState } from 'react';
import { useDispatch } from 'react-redux';

// thunk import
// import { login } from '../../store/session'

// import styles from './LoginForm.module.css'

const CreatePostForm = () => {
   const dispatch = useDispatch();

   const [credential, setCredential] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      // return dispatch(login({ credential, password }))
      //    .catch(async (res) => {
      //       const data = await res.json();
      //       if (data && data.errors) setErrors(data.errors);
      //    });
   }


   return (
      <div >
         <form
            onSubmit={handleSubmit}
         >
            <ul>
               {errors.map((error, i) => (
                  <li key={i}>{error}</li>
               ))}
            </ul>
            <input
               type='text'
               placeholder='Username or Email'
               value={credential}
               onChange={(e) => setCredential(e.target.value)}
               required
            />
            <input
               type='password'
               placeholder='Password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
            />
            <button type='submit'>Create Post</button>
         </form>
      </div>
   );
};


export default CreatePostForm;
