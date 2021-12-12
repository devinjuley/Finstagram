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
    const [isLoaded, setIsLoaded] = useState(false);

    const sessionUser = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile);
    const posts = useSelector(state => state.posts)
    const follows = useSelector(state => state.follows)

    // const profilePosts = Object.assign([], profile.posts)
    const profilePosts = Object.assign([], posts)
    profilePosts.reverse();

    let { userId } = useParams()

    useEffect(async () => {
        await dispatch(getProfileThunk(userId))
        await dispatch(getProfilePostsThunk(userId))
        await dispatch(getFollowsThunk(sessionUser.id))
        if (!isLoaded) setIsLoaded(true);

    }, [dispatch, userId, sessionUser.id]);

    const handleFollowSubmit = () => {
        const payload = {
            follower_id: sessionUser.id,
            followed_id: Number(userId)
        }
        dispatch(addFollowThunk(payload))
    };

    const handleUnfollowSubmit = () => {
        const payload = {
            follower_id: sessionUser.id,
            followed_id: Number(userId)
        }
        dispatch(removeFollowThunk(payload))
    };

    // new button content logic
    let button = null;
    if (sessionUser.id === Number(userId)) {
        button = null
    } else if (Number(userId) in follows) {
        button = (
            <div className='profile-button-house-om'>
                <a className='profile-unfollow-om' onClick={handleUnfollowSubmit}>Unfollow</a>
            </div>
        )
    } else if (!(Number(userId) in follows)) {
        button = (
            <div className='profile-button-house-om'>
                <a className='profile-follow-om' onClick={handleFollowSubmit}>Follow</a>
            </div>
        )
    };

    return (
        <>
            {isLoaded && (<div id='profile-page-container-om'>
                <div className='profile-page-info-megacontainer-om'>
                    <div id='profile-page-info-container-om'>
                        <div className='profile-page-user-image-th'>
                            {profile?.profile_image_url && (<img src={profile?.profile_image_url} alt='user-profile' id='profile-image-om' />)}
                        </div>
                        <div id='profile-info-om'>
                            <div id='profile-username-om'>
                                {profile?.username && (profile?.username)}
                            </div>
                            <div>
                                {profile?.first_name && (profile?.first_name + ' ' + profile?.last_name)}
                            </div>
                        </div>
                        <div className='follow-button-container-th'>
                            {button}
                        </div>
                    </div>
                </div>
                <div className='profile-page-POSTS'>
                    POSTS
                </div>
                <div className='profile-parent-div-dj'>
                    {profilePosts?.map(post => (
                        <div key={post.id}>
                            <SinglePostTile post={post} />
                        </div>
                    ))}
                </div>
            </div>)}
        </>
    )
}


export default ProfilePage;
