import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EditSinglePost = ({post}) => {
    const dispatch = useDispatch();
    const [postContent, setPostContent] = useState('');


    const handleEditSubmission = (e) => {

    }

    return (
        <>
            <a>
                {console.log('Edit button here')}
                {console.log(post)}
            </a>
            <img src={post?.images[0]?.image_url} />
            <form onSubmit={handleEditSubmission}>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
            </form>
        </>
    )
}

export default EditSinglePost
