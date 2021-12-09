import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SinglePostTile } from '../DiscoverPage/DiscoverPage';
import { getProfileThunk } from '../../store/profile';


function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(state => state.posts)
    const profile = useSelector(state => state.profile);
    const profilePosts = Object.assign([], profile.posts)

    useEffect(() => {
        dispatch(getProfileThunk(sessionUser.id))
    }, [dispatch, posts])

    const handleFollowSubmit = () => {

    }
    let followButtonContent;

    // if ()
    <button type='submit' onClick={handleFollowSubmit}>Follow</button>
    return (
        <div>
            <div className='profile-image'>
                <div>
                    <img src={profile.profile_image_url} alt='profile-image' />
                </div>
            </div>
            <div className='profile-info'>
                <div>
                    {profile.username}
                </div>
                <div>
                    {profile.first_name + ' ' + profile.last_name}
                </div>
            </div>
            <div className='profile-follow'>
                {followButtonContent}
            </div>
            <div className='profile-posts'>
                <div>
                    {profilePosts?.map(post => (
                        <div key={post.id}>
                            <SinglePostTile post={post}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ProfilePage;
