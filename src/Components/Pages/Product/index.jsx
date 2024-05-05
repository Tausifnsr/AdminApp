import React, { useState } from 'react'
import Layouts from '../../Layouts'
import Table from '../../Shared/Table';
import { IoSearchOutline } from "react-icons/io5";
import { data } from '../../../data/data';
import { useNavigate } from 'react-router-dom';
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import Modal from '../../Shared/Modal';

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate('/addProduct');
  }

  const handleModal = (actionType, selectedObj) => {
    setIsModalOpen(prevState => !prevState);
    if (actionType === 'view') {
      setSelectedItem(selectedObj)
    }
  }

  return (
    <>
      <Layouts>
        <div>
          <div className='flex items-center justify-between mb-8'>
            <h1 className='text-2xl font-bold'>Product List</h1>
          </div>
          <div className='flex '>
            <div className='bg-white rounded-xl p-5 w-full'>
              <div>
                <div className='flex gap-2 items-center text-textGray text-sm'><MdOutlineTipsAndUpdates className='text-base text-primaryColor' />Tip : search by Product Name, which you can rely on to find the extact product you need.</div>
                <div className='flex justify-between items-center py-6'>
                  <div className='flex gap-3 items-center w-full'>
                    <span className='text-textGray text-sm'>Showing  </span>
                    <select className='w-20 rounded-lg border-borderColor border cursor-pointer text-BoldText text-base  py-2 px-3'>
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                      <option>40</option>
                    </select>
                    <span className='text-textGray text-sm'>entries</span>
                    <div className='w-[30%] flex items-center justify-between border-borderColor border rounded-lg py-2 px-5 ' style={{ borderWidth: '1px' }}>
                      <input type='text' placeholder='Search here...' className='outline-none' />
                      <IoSearchOutline className="text-xl" />
                    </div>
                  </div>
                  <button className='py-[7px] w-52 text-base font-semibold rounded-lg' style={{ border: '1px solid #2E7DFD', color: '#2E7DFD' }} onClick={handleAddProduct}> <span className='font-normal text-lg pr-3'>+</span> Add new</button>
                </div>
              </div>
              <Table data={data} handleModal={handleModal} />
            </div>
          </div>

        </div>
      </Layouts>
      {isModalOpen && <Modal selectedItem={selectedItem} handleModal={handleModal}/>}

    </>
  )
}

export default Products;
