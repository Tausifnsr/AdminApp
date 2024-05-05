import React, { useState } from 'react';
import Layouts from '../../../Layouts';
import { BsCloudUpload } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function AddProduct() {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/product');
    }

    const handleSelect = (item) => {
        if (!selectedOptions.includes(item)) {
            setSelectedOptions((prevOptions) => [...prevOptions, item]);
        }
        else {
            setSelectedOptions((prevOptions) => prevOptions.filter((ele) => ele !== item));
        }
    }


    return (
        <Layouts>
            <div>
                <div className='flex items-center justify-between mb-8'>
                    <h1 className='text-2xl font-bold'>Edit</h1>
                </div>

                <form>
                    <div className='w-full flex justify-between'>
                        <div className='leftForm bg-white rounded-xl w-2/4 p-6 mx-1'>

                            <div className='my-2'>
                                <div>
                                    <div className='my-2'><label className='text-lg font-medium'>Product Name</label><span className='text-red-500'>*</span></div>
                                    <input type='text' placeholder='Enter the Product name' className='w-full outline-none border-borderColor border-2 p-2 rounded-lg' />
                                </div>
                                <span className='text-gray-400'>Do not exceed 20 characters when entering the product name.</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>HSN Code</label><span className='text-red-500'>*</span></div>
                                        <input type='text' placeholder='Enter the HSN Code' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
                                    </div>
                                </div>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>Purchase Price</label><span className='text-red-500'>*</span></div>
                                        <input type='text' placeholder='Enter Puchase Price' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>MRP</label><span className='text-red-500'>*</span></div>
                                        <input type='text' placeholder='Enter the MRP' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
                                    </div>

                                </div>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>Inventory</label><span className='text-red-500'>*</span></div>
                                        <input type='text' placeholder='Enter the inventory' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='w-full my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>Gst</label><span className='text-red-500'>*</span></div>
                                        <input type='text' className='w-2/5 p-2 border-2 border-borderColor rounded-lg' placeholder='Enter GST %' />
                                    </div>
                                </div>
                                <div className='w-[80%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>Category</label><span className='text-red-500'>*</span></div>
                                        <select className='w-full p-2 border-2 border-borderColor rounded-lg'>
                                            <option>Herbal Supplements and Medicines</option>
                                            <option>Ayurvedic Skincare</option>
                                            <option>Hair Care</option>
                                            <option>Massage Oils and Body Care</option>
                                            <option>Herbal Teas and Tonics</option>
                                            <option>Ayurvedic Cosmetics</option>
                                            <option>Ayurvedic Health and Wellness Kits</option>
                                            <option>Ayurvedic Dietary Supplements</option>
                                            <option>Herbal Powders and Pastes</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full my-2 flex items-center justify-between'>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>Sub Category</label><span className='text-red-500'>*</span></div>
                                        <select className='w-full p-2 border-2 border-borderColor rounded-lg'>
                                            <option>Kashayam</option>
                                            <option>Churnams</option>
                                            <option>Tailam</option>
                                            <option>Ghrithms</option>
                                            <option>Lehams</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-[45%]'>
                                    <div className='my-2'><label className='text-lg font-medium'>Available Package Size</label><span className='text-red-500'>*</span></div>
                                    <div className={`flex items-center justify-between p-2 border-2 border-borderColor rounded-lg ${isDropDownOpen ? 'hidden' : ''}`} onClick={() => setIsDropDownOpen(true)}> Select available size <IoIosArrowDown /></div>
                                    <div className={`relative w-4/5 p-2 border-2 border-borderColor rounded-lg ${!isDropDownOpen ? 'hidden' : ''}`}>
                                        <div className={`${selectedOptions.includes('100') ? 'bg-borderColor' : ''} m-1 rounded-lg p-1 flex items-center gap-2`}><input type='checkbox' onClick={() => handleSelect('100')} /> 100gm</div>
                                        <div className={`${selectedOptions.includes('250') ? 'bg-borderColor' : ''} m-1 rounded-lg p-1 flex items-center gap-2`}><input type='checkbox' onClick={() => handleSelect('250')} />250gm</div>
                                        <div className={`${selectedOptions.includes('500') ? 'bg-borderColor' : ''} m-1 rounded-lg p-1 flex items-center gap-2`}><input type='checkbox' onClick={() => handleSelect('500')} />500gm</div>
                                        <div className={`${selectedOptions.includes('750') ? 'bg-borderColor' : ''} m-1 rounded-lg p-1 flex items-center gap-2`}><input type='checkbox' onClick={() => handleSelect('750')} />750gm</div>
                                        {/* <div className='flex justify-end'><button className='w-20 p-0.5 rounded-lg bg-primaryColor text-white border-none' onClick={() => setIsDropDownOpen(false)}>Select</button></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className='my-2'>
                                <div>
                                    <div className='my-2'><label className='text-lg font-medium'>Description</label><span className='text-red-500'>*</span></div>
                                    <textarea type='text' placeholder='Enter the product description' className='w-full minHeight outline-none border-2 border-borderColor p-2 rounded-lg' />
                                </div>
                                <span className='text-gray-400'>Do not exceed 200 characters when entering the product description.</span>
                            </div>

                            <div className='my-2'>
                                <div>
                                    <div className='my-2'><label className='text-lg font-medium'>How to use</label><span className='text-red-500'>*</span></div>
                                    <textarea type='text' placeholder='Enter the steps seperate by comma' className='w-full minHeight outline-none border-2 border-borderColor p-2 rounded-lg' />
                                </div>
                            </div>

                        </div>
                        <div className='rightForm relative bg-white rounded-xl w-2/4 p-6 mx-1'>
                            <div className='my-2'>
                                <div>
                                    <div className='my-2'><label className='text-lg font-medium'>Ingredients</label><span className='text-red-500'>*</span></div>
                                    <textarea type='text' placeholder='Enter the ingredients seperate by comma' className='w-full minHeight outline-none border-2 border-borderColor p-2 rounded-lg' />
                                </div>
                            </div>
                            <div className='imageArea my-5 '>
                                <div className='my-2 flex flex-col'>
                                    <label className='text-lg font-medium'>Upload Images</label>
                                    <div className='flex flex-col justify-center relative border-2 border-borderColor p-2 h-64 w-64 rounded-lg'>
                                        <BsCloudUpload className='text-[3.5rem] relative left-[6rem]  text-primaryColor' />
                                        <input type='file' className='outline-none ml-[2.75rem] absolute left-8 h-16 opacity-0' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full gap-3 absolute bottom-5'>
                                <button className='w-2/5 p-3 bg-primaryColor text-white rounded-lg font-semibold'>Add product</button>
                                <button className='w-2/5 p-3 border border-dangerColor text-dangerColor rounded-lg font-semibold custom-button-shadow hover:text-white' onClick={handleCancelClick}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>


            </div>
        </Layouts>
    )
}

export default AddProduct