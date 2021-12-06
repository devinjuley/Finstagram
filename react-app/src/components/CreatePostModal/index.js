import { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreatePostForm from './CreatePostForm';

function CreatePostFormModal() {
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <a onClick={() => setShowModal(true)}>Create Post</a>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <CreatePostForm />
            </Modal>
         )}
      </>
   );
}

export default CreatePostFormModal;
