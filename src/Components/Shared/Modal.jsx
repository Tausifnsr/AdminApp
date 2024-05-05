import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Modal({ user: propUser, onCloseModal }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (propUser) {
      console.log('User data in useEffect:', propUser);
      setUser(propUser);
    }
  }, [propUser]);

  const handleEditClick = () => {
    console.log('User data before navigating:', user);
    onCloseModal(); // Close the modal before navigating
    navigate('/editUser', { state: { user } });
  };

  console.log('User data before rendering:', user);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-1/3 min-h-max h-3/5 bg-white p-8 rounded-lg'>
        <h2 className='text-2xl font-bold mb-4'>User Details</h2>
        <form className='space-y-4'>
          <div className='flex flex-col'>
            <label className='font-semibold mb-1'>Name:</label>
            <input type='text' value={user?.User} className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold mb-1'>Email:</label>
            <input type='text' value={user?.Email} className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold mb-1'>Phone:</label>
            <input type='text' value={user?.Phone} className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
          </div>
        </form>
        <div className='flex justify-end mx-4 my-6'>
          <button
            onClick={handleEditClick}
            className='min-w-28 px-4 py-2 rounded-lg mt-4 border-2 hover:bg-[#2e7dfd] hover:text-white border-[#2e7dfd] text-[#2e7dfd]'
          >
            Edit
          </button>
          <button
            className='min-w-28 px-4 py-2 mx-2 rounded-lg mt-4 border-2 hover:bg-slate-700 hover:text-white text-slate-700 border-slate-700'
            onClick={onCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
