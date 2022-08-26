import React, { useState } from 'react';
import Modal from '../components/Modal';

const Playground = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <button
        onClick={handleModal}
        className='border bg-blue-500 px-2 py-1  rounded-sm '
      >
        Open Modal
      </button>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default Playground;
