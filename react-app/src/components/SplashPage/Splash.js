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
        await dispatch(login(email,password))
        return history.push('/')
    };

    return (
        <div className='container-for-everything'>
            <div className='container-for-phone-pics'>
                <img className='splash-img' src="https://media.discordapp.net/attachments/916411132984565770/919325409013809262/unknown.png" alt='phone pics' />
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
