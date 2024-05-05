import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/Icons/logo.png";
import { RxDashboard } from "react-icons/rx";
import { BsHouseDash, BsCartCheck, BsCart4 } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiDiamondBold } from "react-icons/pi";
import { TbDiscount2, TbUserStar } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import '../../App.css'

function Sidemenu({ isMenuOpen }) {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [itemClicked, setItemClicked] = useState("");

  const handleItemClick = (itemName) => {
    setItemClicked((prevState) => (prevState === itemName ? "" : itemName));
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };
  return (
    <div
      className={`sideMenu h-screen fixed z-10 custom-shadow ${
        isMenuOpen ? "w-[252px]" : "w-[90px]"
      }`}
    >
      <div className={`h-20 p-5 flex gap-5 items-center border-b`}>
        <img src={Logo} alt="img" width={50} />
        <div className={`font-bold text-lg ${!isMenuOpen ? "hidden" : ""}`}>
          AdminLogo
        </div>
      </div>
      <ul className="px-5 mt-5 flex gap-[0.5rem] flex-col">
        <li className="flex items-center gap-3 px-2 py-2  cursor-pointer">
          <div className="text-xl">
            <RxDashboard
              className={`${!isMenuOpen ? "text-fontTwohalf" : ""}`}
            />
          </div>{" "}
          <span
            className={`font-medium text-base ${!isMenuOpen ? "hidden" : ""}`}
          >
            Dashboard
          </span>
        </li>
        <li onClick={() => handleItemClick("facility")}>
          <Link
            to={"/facilityList"}
            className="flex items-center gap-3 px-2 py-2  cursor-pointer"
          >
            <div className="text-xl">
              <BsHouseDash
                className={`${!isMenuOpen ? "text-fontTwohalf" : ""}`}
              />
            </div>{" "}
            <div className="flex justify-between items-center w-full">
              <span
                className={`font-medium text-base ${
                  !isMenuOpen ? "hidden" : ""
                }`}
              >
                Facility
              </span>
              {itemClicked === "facility" ? (
                <IoIosArrowUp className={`${!isMenuOpen ? "hidden" : ""}`} />
              ) : (
                <IoIosArrowDown className={`${!isMenuOpen ? "hidden" : ""}`} />
              )}
            </div>
          </Link>
        </li>
        {isMenuOpen && (
          <ul className={`ml-5 ${itemClicked === "facility" ? "" : "hidden"}`}>
            <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/locationList"} className="font-normal text-sm">
                Locations List
              </Link>
            </li>
          </ul>
        )}
        <li
          className="flex items-center gap-3 px-2 py-2  cursor-pointer"
          onClick={() => handleItemClick("product")}
        >
          <div className="text-xl">
            {" "}
            <BsCartCheck
              className={`${!isMenuOpen ? "text-fontTwohalf" : ""}`}
            />
          </div>{" "}
          <div className="flex justify-between items-center w-full">
            <span
              className={`font-medium text-base ${!isMenuOpen ? "hidden" : ""}`}
            >
              Product
            </span>
            {itemClicked === "product" ? (
              <IoIosArrowUp className={`${!isMenuOpen ? "hidden" : ""}`} />
            ) : (
              <IoIosArrowDown className={`${!isMenuOpen ? "hidden" : ""}`} />
            )}
          </div>
        </li>
        {isMenuOpen && (
          <ul className={`ml-5 ${itemClicked === "product" ? "" : "hidden"}`}>
            <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/product"} className="font-normal text-sm">
                Product List
              </Link>
            </li>
            <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/addProduct"} className="font-normal text-sm">
                Add Product
              </Link>
            </li>
            <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/addProduct"} className="font-normal text-sm">
                All Category
              </Link>
            </li>
          </ul>
        )}
        <li
          className="flex items-center gap-3 px-2 py-2  cursor-pointer"
          onClick={() => handleItemClick("user")}
        >
          <div className="text-xl">
            {" "}
            <TbUserStar
              className={`${!isMenuOpen ? "text-fontTwohalf" : ""}`}
            />
          </div>{" "}
          <div className="flex justify-between items-center w-full">
            <span
              className={`font-medium text-base ${!isMenuOpen ? "hidden" : ""}`}
            >
              User
            </span>
            {itemClicked === "user" ? (
              <IoIosArrowUp className={`${!isMenuOpen ? "hidden" : ""}`} />
            ) : (
              <IoIosArrowDown className={`${!isMenuOpen ? "hidden" : ""}`} />
            )}
          </div>
        </li>
        {isMenuOpen && (
          <ul className={`ml-5 ${itemClicked === "user" ? "" : "hidden"}`}>
            <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/users"} className="font-normal text-sm">
                User List
              </Link>
            </li>
            <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/addUser"} className="font-normal text-sm">
                Add User
              </Link>
            </li>
          </ul>
        )}
        <li
          className="flex items-center gap-3 px-2 py-2  cursor-pointer"
          onClick={() => handleItemClick("order")}
        >
          <div className="text-xl">
            {" "}
            <BsCart4 className={`${!isMenuOpen ? "text-fontTwohalf" : ""}`} />
          </div>{" "}
          <div className="flex justify-between items-center w-full">
            <span
              className={`font-medium text-base ${!isMenuOpen ? "hidden" : ""}`}
            >
              Order
            </span>
            {itemClicked === "order" ? (
              <IoIosArrowUp className={`${!isMenuOpen ? "hidden" : ""}`} />
            ) : (
              <IoIosArrowDown className={`${!isMenuOpen ? "hidden" : ""}`} />
            )}
          </div>
        </li>
        {isMenuOpen && (
          <ul className={`ml-5 ${itemClicked === "order" ? "" : "hidden"}`}>
            <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/orders"} className="font-normal text-sm">
                All Orders
              </Link>
            </li>
            <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/orderDetails"} className="font-normal text-sm">
                Order Details
              </Link>
            </li>
            {/* <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/orderTracking"} className="font-normal text-sm">
                Order Tracking
              </Link>
            </li> */}
          </ul>
        )}
        
            {/* Customer Section */}

        <li
          className="flex items-center gap-3 px-2 py-2  cursor-pointer"
          onClick={() => handleItemClick("customer")}
        >
          <div className="text-xl">
            {" "}
            <FaRegUser className={`${!isMenuOpen ? "text-fontTwohalf" : ""}`} />
          </div>{" "}
          <div className="flex justify-between items-center w-full">
            <span
              className={`font-medium text-base ${!isMenuOpen ? "hidden" : ""}`}
            >
              Customer
            </span>
            {itemClicked === "customer" ? (
              <IoIosArrowUp className={`${!isMenuOpen ? "hidden" : ""}`} />
            ) : (
              <IoIosArrowDown className={`${!isMenuOpen ? "hidden" : ""}`} />
            )}
          </div>
        </li>
        {isMenuOpen && (
          <ul className={`ml-5 ${itemClicked === "customer" ? "" : "hidden"}`}>
            <li className="flex gap-3 items-center px-4 py-2">
              <PiDiamondBold className="text-[10px]" />
              <Link to={"/customersList"} className="font-normal text-sm">
                Customers List
              </Link>
            </li>
          </ul>
        )}

        <li
          className="flex items-center gap-3 px-2 py-2  cursor-pointer"
          onClick={() => handleItemClick("order")}
        >
          <div className="text-xl">
            {" "}
            <TbDiscount2
              className={`${!isMenuOpen ? "text-fontTwohalf" : ""}`}
            />
          </div>{" "}
          <div className="flex justify-between items-center w-full">
            <span
              className={`font-medium text-base ${!isMenuOpen ? "hidden" : ""}`}
            >
              Discount
            </span>
          </div>
        </li>
        <li
          className="flex items-center gap-3 px-2 py-2  cursor-pointer"
          onClick={() => handleItemClick("order")}
        >
          <div className="text-xl">
            {" "}
            <IoSettingsOutline
              className={`${!isMenuOpen ? "text-fontTwohalf" : ""}`}
            />
          </div>{" "}
          <div className="flex justify-between items-center w-full">
            <span
              className={`font-medium text-base ${!isMenuOpen ? "hidden" : ""}`}
            >
              Setting
            </span>
          </div>
        </li>
        <li
          className="flex items-center gap-3 px-2 py-2  cursor-pointer"
          onClick={() => handleItemClick("order")}
        >
          <div className="text-xl">
            {" "}
            <RiLogoutBoxLine
              className={`${!isMenuOpen ? "text-fontTwohalf" : ""}`}
            />
          </div>{" "}
          <div className="flex justify-between items-center w-full">
            <span
              className={`font-medium text-base ${!isMenuOpen ? "hidden" : ""}`}
            >
              Logout
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidemenu;
