import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SinglePostTile } from '../DiscoverPage/DiscoverPage';

import './ProfilePage.css'

//thunk import
import { getProfileThunk } from '../../store/profile';
import { addFollowThunk, removeFollowThunk, getFollowsThunk } from '../../store/follows';
import { getProfilePostsThunk } from '../../store/post'


function ProfilePage() {
    const dispatch = useDispatch();
    const [unfollowButton, setUnfollowButton] = useState(false)
    const [buttonContent, setButtonContent] = useState(true)
    const sessionUser = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile);
    useSelector(state => state.posts)
    useSelector(state => state.follows)

    const profilePosts = Object.assign([], profile.posts)
    let { userId } = useParams()

    useEffect(() => {
        if (sessionUser.id == userId) {
            dispatch(getProfileThunk(sessionUser.id))
            dispatch(getProfilePostsThunk(sessionUser.id))
            dispatch(getFollowsThunk(sessionUser.id))
        } else {
            dispatch(getProfileThunk(userId))
            dispatch(getProfilePostsThunk(userId))
            dispatch(getFollowsThunk(sessionUser.id))
        }
    }, [dispatch, userId]);


    if (sessionUser.id == userId) {
        if (buttonContent !== false) {
            setButtonContent(false)
        }
    };

    if (userId in sessionUser.follows && !unfollowButton) {
        setUnfollowButton(true)
    }

    const handleFollowSubmit = async () => {
        const payload = {
            follower_id: sessionUser.id,
            followed_id: Number(userId)
        }
        await dispatch(addFollowThunk(payload))
        setUnfollowButton(true)
    };

    const handleUnfollowSubmit = async () => {
        const payload = {
            follower_id: sessionUser.id,
            followed_id: Number(userId)
        }
        await dispatch(removeFollowThunk(payload))
        setUnfollowButton(false)
    };

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
                    <button onClick={handleUnfollowSubmit}>Unfollow</button>
                </div>
            )
        }
    }

    return (
        <div id='profile-page-container-om'>
            <div id='profile-page-info-container-om'>
                <img src={profile?.profile_image_url} alt='profile-image' id='profile-image-om' />
                <div id='profile-info-om'>
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
