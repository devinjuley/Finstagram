import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { SinglePostTile } from '../DiscoverPage/DiscoverPage';

//thunk import
import { getProfileThunk } from '../../store/profile';
import { addFollowThunk } from '../../store/follows';


function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(state => state.posts)
    const profile = useSelector(state => state.profile);
    const profilePosts = Object.assign([], profile.posts)
    const { userId } = useParams()
    const sessionUserId = sessionUser.id

    useEffect(() => {
        dispatch(getProfileThunk(userId))
    }, [dispatch, posts, userId])

    const handleFollowSubmit = () => {
        dispatch(addFollowThunk(userId))
    };

    let followButtonContent;
    // if (sessionUser.id == userId) {
    //     followButtonContent = null
    // } else if (userId in sessionUser.follows) {
    //     followButtonContent = (
    //         <div>
    //             <button>Unfollow</button>
    //         </div>
    //     )
    // } else {
    //     followButtonContent = (
    //         <div>
    //             <button onClick={handleFollowSubmit}>Follow</button>
    //         </div>
    //     )
    // }

    // <button type='submit' onClick={handleFollowSubmit}>Follow</button>

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
                {followButtonContent}
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
