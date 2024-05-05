import React, { useEffect, useState } from 'react'
import Layouts from '../../Layouts'
import { MdOutlineTipsAndUpdates } from 'react-icons/md'
import Table from '../../Shared/Table';
import { LocationList } from '../../../data/LocationListData';
import Modal from '../../Shared/Modal';
import { useNavigate } from 'react-router-dom';

function LocationsList() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    
    useEffect(() => {
        console.log(selectedItem);
    }, [selectedItem])

    const handleModal = (actionType, selectedObj) => {
        setIsModalOpen(prevState => !prevState);
        if (actionType === 'view') {
            setSelectedItem(selectedObj)
        }
    }

    const handleClick = () => {
        navigate('/addLocation');
    }
    return (
        <>
            <Layouts>
                <div>
                    <div className='flex items-center justify-between mb-8'>
                        <h1 className='text-2xl font-bold'>Location</h1>
                    </div>
                    <div className='bg-white rounded-xl p-5 w-full'>
                        <div>
                            <div className='flex gap-2 items-center text-textGray text-sm'><MdOutlineTipsAndUpdates className='text-base text-primaryColor' />Tip search by Product ID: Each product is provided with a unquie ID, which you can rely on to find the extact product you need.</div>
                            <div className='flex justify-end items-center py-6'>
                                <button className='py-[7px] w-52 text-base font-semibold rounded-lg' style={{ border: '1px solid #2E7DFD', color: '#2E7DFD' }} onClick={handleClick}> <span className='font-normal text-lg pr-3' >+</span> Add new</button>
                            </div>
                        </div>
                        <Table data={LocationList} handleModal={handleModal} />
                    </div>

                </div>
            </Layouts>
            {isModalOpen && <Modal selectedItem={selectedItem} handleModal={handleModal}/>}

        </>
    )
}


export default LocationsList