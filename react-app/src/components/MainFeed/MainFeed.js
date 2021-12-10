import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SinglePostTile } from '../DiscoverPage/DiscoverPage';
//import thunk
import { getAllPostsThunk } from '../../store/post';
import { getFollowsThunk } from '../../store/follows';

// import css
import './MainFeed.css';

//single post modal
import SinglePost from '../SinglePostModal/SinglePostComponent';
import { Modal } from '../../context/Modal';
import '../../context/Modal.css'

import CreateCommentForm from '../SinglePostModal/CreateCommentComponent';

export const MainFeedTile = ({ post }) => {
    const hideForm = () => setShowModal(false)
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='single-post-tile-mainfeed-dj'>
            <div className='single-post-mainfeed-dj'>
                <div className='pic-and-usename-mainfeed-dj'>
                    <img src={post?.user?.profile_image_url} className='commented-user-profile-image-dj' />
                    <a href={`/users/${post?.user?.id}`} className='single-post-username-mainfeed-dj'>{post?.user?.username}</a>
                </div>
                <img src={post?.images[0]?.image_url} alt='post' onClick={() => setShowModal(true)} className='single-post-image-mainfeed-dj' />
                <div className='usename-and-comment-mainfeed-dj'>
                    <a href={`/users/${post?.user?.id}`} className='single-post-username-mainfeed-dj'>{post?.user?.username}</a>
                    <span>{post?.content}</span>
                </div>
                <div onClick={() => setShowModal(true)} className='view-all-comments-mainfeed-dj'>View all comments</div>
                <CreateCommentForm post={post} showModal={showModal} setShowModal={setShowModal} />
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <SinglePost hideForm={hideForm} post={post} />
                    </Modal>
                )}
            </div>
        </div>
    );

}

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
        <div>
            {posts_arr.map(post => (
                <div key={post.id}>
                    <MainFeedTile post={post} />
                </div>
            ))}
        </div>
    )
}

export default MainFeed;
