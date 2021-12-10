import { NavLink, useHistory } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import { useSelector } from 'react-redux';
// import { getAllPostsThunk } from '../../store/post';
// import { getFollowsThunk } from '../../store/follows';

const Splash = () => {
    const sessionUser = useSelector(state => state.session.user);



    return (
        <div className='container-for-everything'>
            <div className='container-for-phone-pics'>
                <img src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" alt='phone pics' />
            </div>
            <div className='container-for-login-form'>
                <LoginForm />
            </div>
            {!sessionUser && (
                <div className='container-for-signup-form'>
                    <span>
                        <span>Don't have an account? </span>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </span>
                </div>
            )}
        </div>
    )
};

export default Splash;
