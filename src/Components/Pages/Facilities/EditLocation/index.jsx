import React from 'react';
import Layouts from '../../../Layouts'
import { States } from '../../../../data/states';
import { useNavigate } from 'react-router-dom';

function AddNewFacility() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/locationList');
  }

  return (
    <Layouts>
      <div>
        <div className='flex items-center mb-8'>
          <h1 className='text-2xl font-bold'>New Location</h1>
        </div>
        <form>
          <div className='w-full flex flex-wrap relative justify-between gap-4 bg-white rounded-xl p-6 mx-1'>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Location Name</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full outline-none border-borderColor border-2 p-2 rounded-lg' />
              </div>
            </div>

            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Location Code</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Location</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Address 1</label><span className='text-red-500'>*</span></div>
                <input type='text'  className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Address 2</label></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>City</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full p-2 border-2 border-borderColor rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Select State</label><span className='text-red-500'>*</span></div>
                <select className='w-full p-2 border-2 border-borderColor rounded-lg'>
                  {
                    States.map((state,idx)=>(
                      <option key={idx}>{state}</option> 
                    ))
                  }
                </select>
              </div>
            </div>

            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Country</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Pincode</label><span className='text-red-500'>*</span></div>
                <input type='number' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Contact No</label><span className='text-red-500'>*</span></div>
                <input type='number' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Email</label><span className='text-red-500'>*</span></div>
                <input type='email' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>PAN Number</label><span className='text-red-500'>*</span></div>
                <input type='number' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>GST</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Latitude</label></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Longitude</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Account Number</label><span className='text-red-500'>*</span></div>
                <input type='number' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Payment Period</label></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>IFSC</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Bank Name</label></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Bank Location</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-1/5 my-1'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Account Name</label><span className='text-red-500'>*</span></div>
                <input type='text' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='w-2/5 mr-[5.5rem]'>
              <div>
                <div className='my-2'><label className='text-lg font-medium'>Description</label><span className='text-red-500'>*</span></div>
                <textarea className='w-full outline-none border-2 minHeight border-borderColor p-2 rounded-lg' />
              </div>
            </div>
            <div className='flex gap-4 items-end'>
              <button className='w-32 h-14 bg-primaryColor text-white rounded-lg font-semibold' onClick={handleClick}>Add product</button>
              <button className='w-32 h-14 border border-dangerColor text-dangerColor rounded-lg font-semibold custom-button-shadow hover:text-white' onClick={handleClick}>Cancel</button>
            </div>
          </div>
        </form>


      </div>
    </Layouts>
  )
}

export default AddNewFacility