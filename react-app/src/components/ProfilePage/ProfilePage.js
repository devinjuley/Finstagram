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
    const { userId } = useParams()
    const sessionUserId = sessionUser.id

    useEffect(() => {
        dispatch(getProfileThunk(userId))
    }, [dispatch, userId]);

    const handleFollowSubmit = () => {
        const payload = {
            follower_id: sessionUserId,
            followed_id: Number(userId)
        }
        dispatch(addFollowThunk(payload))
        setUnfollowButton(true)
    };

    if (sessionUser.id == userId) {
        setButtonContent(false)
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

                {buttonContent && (!unfollowButton && (
                    <div>
                        <button onClick={handleFollowSubmit}>Follow</button>
                    </div>
                ))}

                {buttonContent && (unfollowButton && (
                    <div>
                    <button>Unfollow</button>
                </div>
                ))}

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
