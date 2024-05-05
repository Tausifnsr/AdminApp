import React from 'react';
import { useNavigate } from 'react-router-dom';
import adminLogo from '../../../Assets/Images/Icons/logo.png'

const Register = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault();
    navigate('/')
  }



  return (
    <div className="login-container flex items-center justify-around h-screen bg-lightBlue">
      <div className='gradient-overlay'></div>
      <div>

      </div>
      <div className="flex items-center mb-8">
        <img src={adminLogo} alt='logo' className="w-24 h-24 mr-4" />
        <div>
          <h1 className="text-3xl font-semibold">Admin Panel</h1>
          <p className="text-textGray text-lg">Manage your products with ease</p>
        </div>
      </div>
      <div className='w-1/3 bg-white rounded-lg px-7 py-5'>
        <div className='my-6'>
          <h2 className="text-3xl font-semibold">Register</h2>
          <span className='text-textGray'>Enter the particulars and register yourself</span>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='my-3'>
              <div className='my-2'>
                <div className='my-2'><label className='text-lg font-semibold'>Name</label><span className='text-dangerColor'>*</span></div>
                <input type='text' placeholder='UserName' className='w-4/5 outline-none border-2 p-2 rounded-lg' />
              </div>
            </div>
            <div className='my-3'>
              <div className='my-2'>
                <div className='my-2'><label className='text-lg font-semibold'>Email</label><span className='text-dangerColor'>*</span></div>
                <input type='email' placeholder='Enter your email' className='w-4/5 outline-none border-2 p-2 rounded-lg' />
              </div>
            </div>
            <div className='my-3'>
              <div className='my-2'>
                <div className='my-2'><label className='text-lg font-semibold'>Password</label><span className='text-dangerColor'>*</span></div>
                <input type='password' placeholder='Enter password' className='w-4/5 outline-none border-2 p-2 rounded-lg' />
              </div>
            </div>
            <div className='my-3'>
              <div className='my-2'>
                <div className='my-2'><label className='text-lg font-semibold'>Confirm Password</label><span className='text-dangerColor'>*</span></div>
                <input type='password' placeholder='Confirm password' className='w-4/5 outline-none border-2 p-2 rounded-lg' />
              </div>
            </div>
            <button type='submit' className='w-full p-3 my-4 bg-primaryColor text-white rounded-lg font-semibold'>Register</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;
