import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    return history.push('/')
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div >
      <form onSubmit={onLogin} className='login-form-om'>
        <div className='error-messages-container-th'>
          {/* {errors.map((error, ind) => {
            const errorMessage = error.split(': ')[1]
            return (
              <div key={ind} className='error-message-text-th'>
                {errorMessage}
              </div>
            )
          })} */}
          <div className='error-message-login-om'>
            {errors.length > 0 && (
              <div>The provided credentials are incorrect</div>
            )}
          </div>
        </div>
        <div>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
            className='signup-form-input-om'
          />
        </div>
        <div>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
            className='signup-form-input-om'
          />
        </div>
        <button type='submit' className='signup-buttons-om'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
