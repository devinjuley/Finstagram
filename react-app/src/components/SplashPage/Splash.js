import { NavLink, useHistory } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/session';
import './splash.css';

// import { getAllPostsThunk } from '../../store/post';
// import { getFollowsThunk } from '../../store/follows';

const Splash = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const handleDemoLogin = async () => {
        const email = 'demo@aa.io';
        const password = 'password'
        await dispatch(login(email, password))
        return history.push('/')
    };

    return (
        <div className='container-for-everything'>
            <div className='container-for-phone-pics'>
                <img className='splash-img' src="https://media.discordapp.net/attachments/917128220552331345/919750495139143680/unknown.png?width=678&height=640" alt='phone pics' className='splash-page-image-dj' />
            </div>
            <div>
                <div className='container-for-login-form'>
                    <div className='splash-finstagram-om'>
                        Finstagram
                    </div>
                    <LoginForm />
                    <div>
                        <button onClick={handleDemoLogin} className='demo-buttons-om'>Demo</button>
                    </div>
                    <h2 className='splash-welcome-om'>
                        A place for friends.
                    </h2>
                </div>
                <div className='signup-link-om'>
                    {!sessionUser && (
                        <div>
                            <span>
                                <span>Don't have an account? </span>
                                <NavLink to='/signup' className={'signup-redirect-button-om'}>Sign up</NavLink>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Splash;
