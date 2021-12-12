import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
                    <img src={post?.user?.profile_image_url} className='commented-user-profile-image-dj' alt='user-profile'/>
                    <a href={`/users/${post?.user?.id}`} className='single-post-username-mainfeed-dj'>{post?.user?.username}</a>
                </div>
                <img src={post?.images[0]?.image_url} alt='post' onClick={() => setShowModal(true)} className='single-post-image-mainfeed-dj' />
                <div className='usename-and-comment-mainfeed-dj'>
                    <a href={`/users/${post?.user?.id}`} className='single-post-username-mainfeed-dj'>{post?.user?.username}</a>
                    <span className='mainfeed-caption-dj'> {post?.content}</span>
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
    )

};

function MainFeed() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const follows = useSelector(state => state.follows)
    useSelector(state => state.posts)
    const followsArr = Object.assign([], follows)

    useEffect(() => {
        dispatch(getAllPostsThunk())
        dispatch(getFollowsThunk(sessionUser.id))
    }, [dispatch, sessionUser.id])

    const posts_arr = []
    for (let key in follows) {
        let user = follows[key]
        for (let key in user.posts) {
            posts_arr.push(user.posts[key])

        }
    }
    posts_arr.reverse()

    return (
        <div className='mainfeed-parent-div-dj'>
            <div>
                {posts_arr.map(post => (
                    <div key={post.id}>
                        <MainFeedTile post={post} />
                    </div>
                ))}
            </div>
            <div className='follows-div-parent-dj'>
                <div className='follows-div-dj'>
                    <div className='session-user-logged-in-dj'>
                        <img src={sessionUser?.profile_image_url} className='session-user-profile-photo-mainfeed-dj' alt='user-profile'/>
                        <a href={`/users/${sessionUser?.id}`} className='session-user-username-dj'>{sessionUser?.username}</a>
                    </div>
                    <div className='people-you-follow-dj'>People you follow</div>
                    <div className='people-you-follow-mapping-dj'>
                        {followsArr.map(person => (
                            <div className='person-you-are-following-dj' key={person.id}>
                                <img src={person.profile_image_url} className='commented-user-profile-image-dj' alt='user-profile'/>
                                <div>
                                    <a href={`/users/${person.id}`} className='username-inside-follow-list-dj'>{person.username}</a>
                                    <div className='firstname-lastname-follow-dj'>{person.first_name} {person.last_name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='footer-parent-div-dj'>
                        <div className='footer'>
                            <a href='/' className='my-name'>
                                Omkar Mehendale
                            </a>
                            <a href='https://www.linkedin.com/in/omkar-mehendale-4a8879153/' className='linked-in'>
                                LinkedIn
                            </a>
                            <a href='https://github.com/mehendaleo' className='git-hub'>
                                GitHub
                            </a>
                        </div>
                        <div className='footer'>
                            <a href='/' className='my-name'>
                                Tanner Hladek
                            </a>
                            <a href='https://www.linkedin.com/in/tannerhladek/' className='linked-in'>
                                LinkedIn
                            </a>
                            <a href='https://github.com/tannerhladek' className='git-hub'>
                                GitHub
                            </a>
                        </div>
                        <div className='footer'>
                            <a href='/' className='my-name'>
                                Devin Juley
                            </a>
                            <a href='https://www.linkedin.com/in/devin-juley-6b4847149/' className='linked-in'>
                                LinkedIn
                            </a>
                            <a href='https://github.com/devinjuley' className='git-hub'>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFeed;
