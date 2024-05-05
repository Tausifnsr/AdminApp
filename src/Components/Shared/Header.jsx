import React from "react";
import { IoSearchOutline } from 'react-icons/io5';
import DummyProfile from '../../Assets/Images/dummy-profile.png';
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

function Header({ toggleMenu, isMenuOpen }) {
    return (
        <div className="bg-white custom-shadow h-20 px-6 flex items-center sticky top-0 z-[100]">
            <div className="w-full flex justify-between items-center">
                <div className="w-[50%] flex items-center gap-3">
                    <div className="text-2xl cursor-pointer text-textGray hover:text-textBold" onClick={toggleMenu}>
                        {isMenuOpen ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
                    </div>
                    <div className='w-full h-[45px] flex items-center justify-between border-borderColor rounded-lg py-2 px-4 mx-2 text-sm text-textGray' style={{ borderWidth: '1px' }}>
                        <input type='text' placeholder='Search here...' className="w-full outline-none" />
                        <IoSearchOutline className="text-2xl" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex gap-3">
                        <div className="rounded-full w-10 h-10">
                            <img src={DummyProfile} alt="img" className="rounded-full" />
                        </div>
                        <div className="">
                            <div className="font-semibold text-BoldText text-sm pb-1">Kristin Watson</div>
                            <div className="text-xs font-normal text-textGray">Admin</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header