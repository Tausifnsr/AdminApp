import React, { useState } from 'react';
import Layouts from '../../../Layouts';
import { BsCloudUpload } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { LuCircleDotDashed } from 'react-icons/lu';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

function AddProduct() {

    // const [selectedOptions, setSelectedOptions] = useState([]);
    const [currHowtoUse, setCurrHowtoUse] = useState('');
    const [howToUse, setHowToUse] = useState([]);
    const [currIngredients, setCurrIngredients] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/product');
    }

    // const handleSelect = (item) => {
    //     if (!selectedOptions.includes(item)) {
    //         setSelectedOptions((prevOptions) => [...prevOptions, item]);
    //     }
    //     else {
    //         setSelectedOptions((prevOptions) => prevOptions.filter((ele) => ele !== item));
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleRemove = (idx,type) => {
        if(type === 'ingredients'){
            const ingredientArr = ingredients;
            ingredientArr.splice(idx,1);
            setIngredients(prevState => [...ingredientArr]);
            console.log(ingredientArr);
        }
        else if(type === 'howToUse'){
            const howtoUseArr = howToUse;
            howtoUseArr.splice(idx,1);
            setHowToUse(prevState => [...howtoUseArr]);
            console.log(howtoUseArr);
        }
    }


    return (
        <Layouts>
            <div>
                <div className='flex items-center justify-between mb-8'>
                    <h1 className='text-2xl font-bold'>New Product</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='w-full flex'>
                        <div className='leftForm bg-white rounded-xl w-2/4 p-6 mx-1'>

                            <div className='my-2'>
                                <div>
                                    <div className='my-2'><label className='text-lg font-medium'>Product Name</label><span className='text-dangerColor'>*</span></div>
                                    <input type='text' placeholder='Enter the Product name' className='w-full outline-none border-borderColor border-2 p-2 rounded-lg' />
                                </div>
                                <span className='text-gray-400'>Do not exceed 20 characters when entering the product name.</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>HSN Code</label><span className='text-dangerColor'>*</span></div>
                                        <input type='text' placeholder='Enter the HSN Code' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
                                    </div>
                                </div>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>Purchase Price</label><span className='text-dangerColor'>*</span></div>
                                        <input type='text' placeholder='Enter Puchase Price' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>MRP</label><span className='text-dangerColor'>*</span></div>
                                        <input type='text' placeholder='Enter the MRP' className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' />
                                    </div>

                                </div>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>Gst</label><span className='text-dangerColor'>*</span></div>
                                        <input type='text' className='w-2/5 p-2 border-2 border-borderColor rounded-lg' placeholder='Enter GST %' />
                                    </div>
                                </div> 
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>Category</label><span className='text-dangerColor'>*</span></div>
                                        <select className='w-full p-2 border-2 border-borderColor rounded-lg'>
                                            <option>Kashayam</option>
                                            <option>Churnams</option>
                                            <option>Tailam</option>
                                            <option>Ghrithms</option>
                                            <option>Lehams</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-[45%] my-2'>
                                    <div>
                                        <div className='my-2'><label className='text-lg font-medium'>Sub Category</label><span className='text-dangerColor'>*</span></div>
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
                                <div className='w-[45%]'>
                                    <div className='my-2'><label className='text-lg font-medium'>Available Package Size</label><span className='text-dangerColor'>*</span></div>
                                    <select className='w-full p-2 border-2 border-borderColor rounded-lg'>
                                        <option>100gm</option>
                                        <option>250gm</option>
                                        <option>500gm</option>
                                        <option>1000gm</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-2 w-full'>
                                <div>
                                    <div className='my-2'><label className='text-lg font-medium'>Description</label><span className='text-dangerColor'>*</span></div>
                                    <div className='w-full flex gap-3 items-center'>
                                        <textarea type='text' className='w-full minHeight outline-none border-2 border-borderColor p-2 rounded-lg' />
                                    </div>
                                </div>
                            </div>
                            <div className='my-2 w-full'>
                                <div>
                                    <div className='my-2'><label className='text-lg font-medium'>How to use</label><span className='text-red-500'>*</span></div>
                                    <div className='w-full flex gap-3 items-center'>
                                        <input type='text' value={currHowtoUse} className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' onChange={(e) => setCurrHowtoUse(e.target.value)} />
                                        <button onClick={() => {setHowToUse(prevState => [...prevState, currHowtoUse]); setCurrHowtoUse('')}} className='bg-primaryColor px-3 py-2 text-white rounded-lg font-semibold'>+</button>
                                    </div>
                                </div>
                                <div className='relative'>
                                    {howToUse.length > 0 && <ul className='absolute w-[92%] h-[6rem] px-2 bg-lightBlue rounded-lg shadow-lg scrollBarWidth overflow-y-scroll overflow-x-hidden'>
                                        {

                                            howToUse &&
                                            howToUse?.map((item, idx) => {
                                                return (
                                                    <div className='flex items-center gap-2 my-3'>
                                                        <LuCircleDotDashed/>
                                                        <>
                                                            <li className='py-1.5 w-full break-all bg-white px-3 border rounded-lg shadow-sm my-1'>{item}</li>
                                                            <div className='flex flex-col items-center gap-3'>
                                                                <span><BiEditAlt className='text-successColor'/></span>
                                                                <span onClick={()=> handleRemove(idx,'howToUse')}><RiDeleteBin6Line className='text-dangerColor'/></span>
                                                            </div>
                                                        </>
                                                    </div>

                                                )
                                            })

                                        }
                                    </ul>}
                                </div>

                            </div>
                        </div>
                        <div className='rightForm relative bg-white rounded-xl w-2/4 p-6 mx-1'>
                            <div className='my-2 w-full'>
                                <div>
                                    <div className='my-2'><label className='text-lg font-medium'>Ingredients</label><span className='text-dangerColor'>*</span></div>
                                    <div className='w-full flex gap-3 items-center'>
                                        <input type='text' value={currIngredients} className='w-full outline-none border-2 border-borderColor p-2 rounded-lg' onChange={(e) => setCurrIngredients(e.target.value)} />
                                        <button onClick={() => {setIngredients(prevState => [...prevState, currIngredients]); setCurrIngredients('')}} className='bg-primaryColor px-3 py-2 text-white rounded-lg font-semibold'>+</button>
                                    </div>
                                </div>
                                <div className='relative'>
                                    {ingredients.length > 0 && <ul className='absolute z-[99] w-[92%] h-[6rem] px-2 bg-lightBlue rounded-lg shadow-lg scrollBarWidth overflow-y-scroll overflow-x-hidden'>
                                        {

                                            ingredients &&
                                            ingredients?.map((item, idx) => {
                                                return (
                                                    <div className='flex items-center gap-2 my-3'>
                                                        <LuCircleDotDashed/>
                                                        <>
                                                            <li className='py-1.5 w-full break-all bg-white px-3 border rounded-lg shadow-sm my-1'>{item}</li>
                                                            <div className='flex flex-col items-center gap-3'>
                                                                <span><BiEditAlt className='text-successColor'/></span>
                                                                <span onClick={()=> handleRemove(idx,'ingredients')}><RiDeleteBin6Line className='text-dangerColor'/></span>
                                                            </div>
                                                        </>
                                                    </div>

                                                )
                                            })

                                        }
                                    </ul>}
                                </div>
                            </div>
                            <div className='imageArea my-5 '>
                                <div className='my-2 flex flex-col'>
                                    <label className='text-lg font-medium'>Upload Images</label>
                                    <div className='flex flex-col justify-center relative border-2 border-borderColor p-2 h-64 w-64 rounded-lg'>
                                        <BsCloudUpload className='text-[3.5rem] relative left-[6rem]  text-primaryColor' />
                                        <input type='file' className='w-[inherit] outline-none ml-[2.75rem] absolute left-8 h-16 opacity-0' />
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
