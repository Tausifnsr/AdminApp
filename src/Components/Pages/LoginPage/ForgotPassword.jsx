import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Layouts from '../../Layouts';

function ForgotPassword() {
  const navigate = useNavigate();
  
  const handleEnterClick = () => {
    navigate('/resetPassword');
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-lightBlue p-8">
      <div className='w-1/3 bg-white rounded-lg px-7 py-4'>
        <div className='my-8'>
          <h2 className="text-3xl font-semibold">Reset your password</h2>
          <span className='text-textGray'>Enter your email to reset password</span>
        </div>
        <div>
          <div className='my-8'>
            <div className='my-2'><label className='text-lg font-medium'>Email address</label><span className='text-dangerColor'>*</span></div>
            <input type='email' placeholder='email address' className='w-full outline-none border rounded-lg border-borderColor p-3'/>
          </div>
        </div>
        <button className='btn w-full p-3 bg-primaryColor text-white rounded-lg font-semibold' onClick={handleEnterClick}>Enter</button>

      </div>


    </div>
  )
}

export default ForgotPassword
