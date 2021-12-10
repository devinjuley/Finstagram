import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { SinglePostTile } from '../DiscoverPage/DiscoverPage';

//thunk import
import { getProfileThunk } from '../../store/profile';
import { addFollowThunk } from '../../store/follows';


function ProfilePage() {
    const dispatch = useDispatch();
    const [unfollowButton, setUnfollowButton] = useState(false)
    const [buttonContent, setButtonContent] = useState(true)
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(state => state.posts)
    const profile = useSelector(state => state.profile);
    // const follows = useSelector(state => state.follows[profile.id])
    const profilePosts = Object.assign([], profile.posts)
    let { userId } = useParams()

    useEffect(() => {
        if (sessionUser.id == userId) {
            dispatch(getProfileThunk(sessionUser.id))
        } else {
            dispatch(getProfileThunk(userId))
        }
    }, [dispatch]);


    const handleFollowSubmit = () => {
        const payload = {
            follower_id: sessionUser.id,
            followed_id: Number(userId)
        }
        dispatch(addFollowThunk(payload))
        setUnfollowButton(true)
    };

    if (sessionUser.id == userId) {
        if (buttonContent != false) {
            setButtonContent(false)
        }
    }

    let button = null;
    if (buttonContent) {
        if (!unfollowButton) {
            button = (
                <div>
                    <button onClick={handleFollowSubmit}>Follow</button>
                </div>
            )
        } else {
            button = (
                <div>
                    <button>Unfollow</button>
                </div>
            )
        }
    }

    return (
        <div>
            <div className='profile-image'>
                <div>
                    <img src={profile?.profile_image_url} alt='profile-image' />
                </div>
            </div>
            <div className='profile-info'>
                <div>
                    {profile?.username}
                </div>
                <div>
                    {profile?.first_name + ' ' + profile?.last_name}
                </div>
            </div>
            <div className='profile-follow'>
                {button}
            </div>
            <div className='profile-posts'>
                <div>
                    {profilePosts?.map(post => (
                        <div key={post.id}>
                            <SinglePostTile post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ProfilePage;
