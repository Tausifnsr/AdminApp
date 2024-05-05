import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import adminLogo from '../../../Assets/Images/Icons/logo.png'

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/product')
  };

  return (
    <div className="login-container flex items-center justify-around h-screen bg-darkBlue">
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
          <h2 className="text-3xl font-semibold">Login to account</h2>
          <span className='text-textGray'>Enter your email & password to login</span>
        </div>
        <div>
          <div className='my-6'>
            <div className='my-2'><label className='text-lg font-medium'>Email address</label><span className='text-red-500'>*</span></div>
            <input type='email' placeholder='Email address' className='w-full outline-none border rounded-lg border-gray-300 p-3' />
          </div>
          <div className='my-6'>
            <div className='my-2'><label className='text-lg font-medium'>Password</label><span className='text-red-500'>*</span></div>
            <input type='password' placeholder='Password' className='w-full outline-none border rounded-lg border-gray-300 p-3' />
          </div>
          <div className='my-4 text-end'>
            <Link to={'/forgotPassword'} className='text-textGray'>Forgot password?</Link>
          </div>
        </div>
        <button className='w-full p-3 bg-primaryColor text-white rounded-lg font-semibold' onClick={handleLogin}>Login</button>
        <div className='text-primaryColor my-4 flex justify-center'>
          <Link to={'/register'}>Haven't registered yet ..?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
