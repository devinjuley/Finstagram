import { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreatePostForm from './CreatePostForm';

function CreatePostFormModal() {
   const [showModal, setShowModal] = useState(false);
   const hideForm = () => setShowModal(false)
   return (
      <>
         <a onClick={() => setShowModal(true)}>Create Post</a>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <CreatePostForm hideForm={hideForm} />
            </Modal>
         )}
      </>
   );
}

export default CreatePostFormModal;
