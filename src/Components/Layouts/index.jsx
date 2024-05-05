import React, { useState } from "react";
import Sidemenu from "../Shared/Sidemenu";
import Header from "../Shared/Header";

const Layouts = ({ children }) => {
    const [isMenuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="main_page">
            <div className="flex">
                <div className={`${(isMenuOpen ? 'w-[300px]' : 'w-[90px]')} h-screen`}>
                    <Sidemenu isMenuOpen={isMenuOpen} />
                </div>
                <div className="w-full">
                    <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                    <div className="w-full px-6 py-8 h-screen scrollBarWidth overflow-y-scroll">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layouts;
