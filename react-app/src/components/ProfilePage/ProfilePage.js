import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SinglePostTile } from '../DiscoverPage/DiscoverPage';

import './ProfilePage.css'

//thunk import
import { getProfileThunk } from '../../store/profile';
import { addFollowThunk, removeFollowThunk, getFollowsThunk } from '../../store/follows';
import { getProfilePostsThunk, getAllPostsThunk } from '../../store/post'


function ProfilePage() {
    const dispatch = useDispatch();
    const [unfollowButton, setUnfollowButton] = useState(false);
    const [buttonContent, setButtonContent] = useState(true);


    console.log('-----------------', unfollowButton);


    const sessionUser = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile);
    const posts = useSelector(state => state.posts)
    const follows = useSelector(state => state.follows)

    // const profilePosts = Object.assign([], profile.posts)
    const profilePosts = Object.assign([], posts)
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

    // && !unfollowButton

    if (userId in follows) {
        if (unfollowButton !== true) {
            setUnfollowButton(true)
        }
    }

    if (!userId in follows) {
        if (unfollowButton !== false) {
            setUnfollowButton(false)
        }
    }

    // if (!userId in sessionUser.follows) {
    //     if (unfollowButton !== false) {
    //         setUnfollowButton(false)
    //     }
    // }

    // if (!userId in sessionUser.follows) {
    //     setUnfollowButton(false)
    // }

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
        if (unfollowButton == false) {
            button = (
                <div className='profile-button-house-om'>
                    <a className='profile-follow-om' onClick={handleFollowSubmit}>Follow</a>
                </div>
            )
        } else {
            button = (
                <div className='profile-button-house-om'>
                    <a className='profile-unfollow-om' onClick={handleUnfollowSubmit}>Unfollow</a>
                </div>
            )
        }
    }


    return (
        <div id='profile-page-container-om'>
            <div className='profile-page-info-megacontainer-om'>
                <div id='profile-page-info-container-om'>
                    <img src={profile?.profile_image_url} alt='profile-image' id='profile-image-om' />
                    <div id='profile-info-om'>
                        <div id='profile-username-om'>
                            {profile?.username}
                        </div>
                        <div>
                            {profile?.first_name + ' ' + profile?.last_name}
                        </div>
                    </div>
                    <div>
                        {button}
                    </div>
                </div>
            </div>
            <div className='profile-page-POSTS'>
                POSTS
            </div>
            {/* <div id='profile-posts'> */}
            <div className='profile-parent-div-dj'>
                {profilePosts?.map(post => (
                    <div key={post.id}>
                        <SinglePostTile post={post} />
                    </div>
                ))}
            </div>
            {/* </div> */}
        </div>
    )
}


export default ProfilePage;
