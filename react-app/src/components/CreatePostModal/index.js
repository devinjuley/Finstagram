import { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreatePostForm from './CreatePostForm';

function CreatePostFormModal() {
   const [showModal, setShowModal] = useState(false);
   const hideForm = () => setShowModal(false)
   return (
      <div>
         <a onClick={() => setShowModal(true)} className='navbar-create-post-link-dj'>❇</a>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <CreatePostForm hideForm={hideForm} />
            </Modal>
         )}
      </div>
   );
}

export default CreatePostFormModal;
