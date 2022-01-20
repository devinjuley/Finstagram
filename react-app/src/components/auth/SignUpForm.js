import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

// icon import
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import './signupform.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [profile_image, setProfileImg] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      setLoading(true);
      const formData = new FormData();
      formData.append("profile_image", profile_image);
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("last_name", last_name);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);

      const data = await dispatch(signUp(formData));
      if (data) {
        setLoading(false);
        setErrors([data])
        return
      }
      setLoading(false);
      return history.push('/');
    } else {
      setErrors(['Password: Passwords do not match'])
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateProfileImg = (e) => {
    setProfileImg(e.target.files[0]);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='mega-parent-of-sign-up-dj'>
      <div className='signup-main-om'>
        {loading && (
          <div className='signup-form-container'>
            <div className='loading-img-container'>
              <img src='https://finstagram-social-bucket.s3.us-west-1.amazonaws.com/loading.gif' alt='loading' />
            </div>
          </div>
        )}
        {!loading && (
          <>
            <div className='signup-form-container'>
              <div className='signup-finstagram-om'>
                Finstagram
              </div>
              <h2 className='signup-welcome-om'>
                Sign up to see photos from your friends.
              </h2>
              <div className='signup-error-messages-container-th'>
                {errors.map((error, ind) => {
                  // const errorMessage = error.split(': ')[1]
                  return (
                    <div key={ind} className='error-message-text-th'>
                      {error}
                    </div>
                  )
                })}
              </div>
              <form onSubmit={onSignUp}>
                <div>
                  {/* <label>Load Profile Image</label> */}
                  <CloudUploadIcon />
                  <input
                    type='file'
                    name='profile_image'
                    accept="image/*"
                    onChange={updateProfileImg}
                    // value={profile_image}
                    placeholder='Upload a profile image'
                  ></input>
                </div>
                <div>
                  {/* <label>First Name</label> */}
                  <input
                    type='text'
                    name='first_name'
                    onChange={updateFirstName}
                    value={first_name}
                    placeholder='First Name'
                    className='signup-form-input-om'
                  ></input>
                </div>
                <div>
                  {/* <label>Last Name</label> */}
                  <input
                    type='text'
                    name='last_name'
                    onChange={updateLastName}
                    value={last_name}
                    placeholder='Last Name'
                    className='signup-form-input-om'
                  ></input>
                </div>
                <div>
                  {/* <label>User Name</label> */}
                  <input
                    type='text'
                    name='username'
                    onChange={updateUsername}
                    value={username}
                    placeholder='User Name'
                    className='signup-form-input-om'
                  ></input>
                </div>
                <div>
                  {/* <label>Email</label> */}
                  <input
                    type='text'
                    name='email'
                    onChange={updateEmail}
                    value={email}
                    placeholder='Email'
                    className='signup-form-input-om'
                  ></input>
                </div>
                <div>
                  {/* <label>Password</label> */}
                  <input
                    type='password'
                    name='password'
                    onChange={updatePassword}
                    value={password}
                    placeholder='Password'
                    className='signup-form-input-om'
                  ></input>
                </div>
                <div>
                  {/* <label>Repeat Password</label> */}
                  <input
                    type='password'
                    name='repeat_password'
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                    placeholder='Repeat Password'
                    className='signup-form-input-om'
                  ></input>
                </div>
                <button type='submit' className='signup-buttons-om'>Sign Up</button>
              </form>
            </div>
            <div className='login-redirect-parent'>
              <span>Have an account?</span>
              <button onClick={(e) => history.push('/')} className='login-redirect-button-om'>Log in</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
