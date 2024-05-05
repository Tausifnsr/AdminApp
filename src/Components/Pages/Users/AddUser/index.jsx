import React, { useState } from 'react'
import Layouts from '../../../Layouts'
import { useNavigate } from 'react-router-dom';


function AddUser() {
    const navigate = useNavigate();
    const [permissions, setPermissions] = useState({
        addProduct: {
            allow: false, deny: false
        },
        updateProduct: {
            allow: false, deny: false
        },
        deleteProduct: {
            allow: false, deny: false
        },
        discount: {
            allow: false, deny: false
        },
        coupon: {
            allow: false, deny: false
        }
    });

    const handleCancelClick = () => {
        navigate('/users');
    }

    const handleChange = (e) => {
        if (e.target.id === 'allow') {

            setPermissions(prevState => ({
                ...prevState, [e.target.name]: {
                    allow: true,
                    deny: false
                }
            }));
        }
        else if (e.target.id === 'deny') {
            setPermissions(prevState => ({
                ...prevState, [e.target.name]: {
                    allow: false,
                    deny: true
                }
            }));
        }
    }

    return (
        <Layouts>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-bold'>Add New User</h1>
                </div>
                <div>
                    <div className='flex justify-between px-8 py-4 my-8 bg-white rounded-lg'>
                        <div className='leftArea w-2/4'>
                            <h1 className='text-2xl font-bold'>Account</h1>
                            <span className='text-gray-400'>Fill in the information to create a new user</span>
                        </div>
                        <div className='rightArea w-2/4'>
                            <form>
                                <div className='my-3'>
                                    <div className='my-2'>
                                        <div className='my-2'><label className='text-lg font-semibold'>Name</label><span className='text-red-500'>*</span></div>
                                        <input type='text' placeholder='UserName' className='w-3/5 outline-none border-2 p-2 rounded-lg' />
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className='my-2'>
                                        <div className='my-2'><label className='text-lg font-semibold'>Email</label><span className='text-red-500'>*</span></div>
                                        <input type='email' placeholder='Enter your email' className='w-3/5 outline-none border-2 p-2 rounded-lg' />
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className='my-2'>
                                        <div className='my-2'><label className='text-lg font-semibold'>Password</label><span className='text-red-500'>*</span></div>
                                        <input type='password' placeholder='Enter password' className='w-3/5 outline-none border-2 p-2 rounded-lg' />
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className='my-2'>
                                        <div className='my-2'><label className='text-lg font-semibold'>Confirm Password</label><span className='text-red-500'>*</span></div>
                                        <input type='password' placeholder='Confirm password' className='w-3/5 outline-none border-2 p-2 rounded-lg' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg px-8 py-4 my-8'>
                        <div className='flex justify-between'>
                            <div className='leftArea w-2/4'>
                                <h1 className='text-2xl font-bold'>Permission</h1>
                                <span className='text-gray-400'>Items that the account is allowed to edit</span>
                            </div>
                            <div className='rightArea w-2/4'>
                                <form>
                                    <div className='my-3'>
                                        <div className='my-2 flex flex-col'>
                                            <label className='text-lg font-semibold my-2'>Add product</label>
                                            <div className=' w-1/5 flex gap-6'>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.addProduct.allow?'bg-primaryColor text-white':''}`} ><input type='radio' id='allow' name='addProduct' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Allow</label></div>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.addProduct.deny?'bg-primaryColor text-white':''}`}><input type='radio' id='deny' name='addProduct' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Deny</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-3'>
                                        <div className='my-2'>
                                            <label className='text-lg font-semibold my-2'>Update product</label>
                                            <div className=' w-1/5 flex gap-6'>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.updateProduct.allow?'bg-primaryColor text-white':''}`}><input type='radio' id='allow' name='updateProduct' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Allow</label></div>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.updateProduct.deny?'bg-primaryColor text-white':''}`}><input type='radio' id='deny' name='updateProduct' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Deny</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-3'>
                                        <div className='my-2'>
                                            <label className='text-lg font-semibold my-2'>Delete product</label>
                                            <div className=' w-1/5 flex gap-6'>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.deleteProduct.allow?'bg-primaryColor text-white':''}`}><input type='radio' id='allow' name='deleteProduct' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Allow</label></div>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.deleteProduct.deny?'bg-primaryColor text-white':''}`}><input type='radio' id='deny' name='deleteProduct' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Deny</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-3'>
                                        <div className='my-2'>
                                            <label className='text-lg font-semibold my-2'>Apply discount</label>
                                            <div className=' w-1/5 flex gap-6'>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.discount.allow?'bg-primaryColor text-white':''}`}><input type='radio' id='allow' name='discount' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Allow</label></div>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.discount.deny?'bg-primaryColor text-white':''}`}><input type='radio' id='deny' name='discount' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Deny</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-3'>
                                        <div className='my-2'>
                                            <label className='text-lg font-semibold my-2'>Create coupon</label>
                                            <div className=' w-1/5 flex gap-6'>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.coupon.allow?'bg-primaryColor text-white':''}`}><input type='radio' id='allow' name='coupon' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Allow</label></div>
                                                <div className={`flex items-center gap-3 bg-gray-300 text-gray-400 rounded-3xl px-3.5 py-1.5 ${permissions.coupon.deny?'bg-primaryColor text-white':''}`}><input type='radio' id='deny' name='coupon' className='w-full p-2 ' onClick={e => handleChange(e)} /><label className='text-lg font-medium'>Deny</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='flex justify-end gap-3 mt-10'>
                            <button className='min-w-32 p-3 bg-primaryColor text-white rounded-lg font-semibold'>Save</button>
                            <button className='min-w-32 p-3 border border-dangerColor text-dangerColor rounded-lg font-semibold custom-button-shadow hover:text-white' onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        </Layouts>
    )
}

export default AddUser