import React from 'react'
import { useNavigate } from 'react-router-dom'

function ResetPassword() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-darkBlue p-8">
      <div className='w-1/3 bg-white rounded-lg px-7 py-4'>
        <div className='my-8'>
          <h2 className="text-3xl font-semibold">Change your password</h2>
          <span className='text-gray-400'>Please use a strong password</span>
        </div>
        <div>
          <div className='my-8'>
            <div className='my-2'><label className='text-lg font-medium'>Password</label><span className='text-red-500'>*</span></div>
            <input type='email' placeholder='Enter password' className='w-full outline-none border rounded-lg border-gray-300 p-3'/>
          </div>
        </div>
        <div>
          <div className='my-8'>
            <div className='my-2'><label className='text-lg font-medium'>Confirm password</label><span className='text-red-500'>*</span></div>
            <input type='email' placeholder='Confirm password' className='w-full outline-none border rounded-lg border-gray-300 p-3'/>
          </div>
        </div>
        <button className='w-full p-3 bg-primaryColor text-white rounded-lg font-semibold' onClick={handleClick}>Change password</button>

      </div>
    </div>
  )
}

export default ResetPassword