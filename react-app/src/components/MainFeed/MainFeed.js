import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePostTile } from '../DiscoverPage/DiscoverPage';
//import thunk
import { getAllPostsThunk } from '../../store/post';
import { getFollowsThunk } from '../../store/follows';

// import css
import './MainFeed.css';

//single post modal
// import SinglePost from '../SinglePostModal/SinglePostComponent';
// import SinglePostModal from '../SinglePostModal';
// import { Modal } from '../../context/Modal';
// import '../../context/Modal.css'


function MainFeed() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const follows = useSelector(state => state.follows)
    useSelector(state => state.posts)


    useEffect(() => {
        dispatch(getAllPostsThunk())
        dispatch(getFollowsThunk(sessionUser.id))
    }, [dispatch])

    const posts_arr = []
    for (let key in follows) {
        let user = follows[key]
        for (let key in user.posts) {
            posts_arr.push(user.posts[key])

        }
    }
    posts_arr.reverse()

    return (
        <div className='discover-parent-div-dj'>
            {posts_arr.map(post => (
                <div key={post.id}>
                    <SinglePostTile post={post} />
                </div>
            ))}
        </div>
    )
}

export default MainFeed;
