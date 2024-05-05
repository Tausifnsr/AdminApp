import React from 'react';
import Layouts from "../../Layouts"
import { FiShoppingBag } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import './style.css';

const Dashboard = () => {
  return (
    <Layouts>
      <div>
        <div className='firstRow w-full flex-wrap flex gap-8 items-center'>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FiShoppingBag className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Sales</p>
              <p>34,945</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>

          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FaDollarSign className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Income</p>
              <p>$ 37,802</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingDown className='text-red-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <IoDocumentOutline className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Orders Paid</p>
              <p>34,500</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-slate-400 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <LuUsers className='icons' />
            </div>
            <div className=' itemsData flex flex-col items-center'>
              <p>Total Visitors</p>
              <p>38,742</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FiShoppingBag className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Sales</p>
              <p>34,945</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>

          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FaDollarSign className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Income</p>
              <p>$ 37,802</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingDown className='text-red-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <IoDocumentOutline className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Orders Paid</p>
              <p>34,500</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-slate-400 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <LuUsers className='icons' />
            </div>
            <div className=' itemsData flex flex-col items-center'>
              <p>Total Visitors</p>
              <p>38,742</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FiShoppingBag className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Sales</p>
              <p>34,945</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>

          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FaDollarSign className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Income</p>
              <p>$ 37,802</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingDown className='text-red-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <IoDocumentOutline className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Orders Paid</p>
              <p>34,500</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-slate-400 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <LuUsers className='icons' />
            </div>
            <div className=' itemsData flex flex-col items-center'>
              <p>Total Visitors</p>
              <p>38,742</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FiShoppingBag className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Sales</p>
              <p>34,945</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>

          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FaDollarSign className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Income</p>
              <p>$ 37,802</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingDown className='text-red-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <IoDocumentOutline className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Orders Paid</p>
              <p>34,500</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-slate-400 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <LuUsers className='icons' />
            </div>
            <div className=' itemsData flex flex-col items-center'>
              <p>Total Visitors</p>
              <p>38,742</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FiShoppingBag className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Sales</p>
              <p>34,945</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>

          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FaDollarSign className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Income</p>
              <p>$ 37,802</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingDown className='text-red-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <IoDocumentOutline className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Orders Paid</p>
              <p>34,500</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-slate-400 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <LuUsers className='icons' />
            </div>
            <div className=' itemsData flex flex-col items-center'>
              <p>Total Visitors</p>
              <p>38,742</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FiShoppingBag className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Sales</p>
              <p>34,945</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>

          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FaDollarSign className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Income</p>
              <p>$ 37,802</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingDown className='text-red-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <IoDocumentOutline className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Orders Paid</p>
              <p>34,500</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-slate-400 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <LuUsers className='icons' />
            </div>
            <div className=' itemsData flex flex-col items-center'>
              <p>Total Visitors</p>
              <p>38,742</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FiShoppingBag className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Sales</p>
              <p>34,945</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>

          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FaDollarSign className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Income</p>
              <p>$ 37,802</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingDown className='text-red-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <IoDocumentOutline className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Orders Paid</p>
              <p>34,500</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-slate-400 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <LuUsers className='icons' />
            </div>
            <div className=' itemsData flex flex-col items-center'>
              <p>Total Visitors</p>
              <p>38,742</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FiShoppingBag className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Sales</p>
              <p>34,945</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>

          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <FaDollarSign className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Total Income</p>
              <p>$ 37,802</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingDown className='text-red-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <IoDocumentOutline className='icons' />
            </div>
            <div className='itemsData flex flex-col items-center'>
              <p>Orders Paid</p>
              <p>34,500</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-slate-400 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
          <div className='items flex justify-evenly items-center bg-white'>
            <div className='icon-wrapper'>
              <LuUsers className='icons' />
            </div>
            <div className=' itemsData flex flex-col items-center'>
              <p>Total Visitors</p>
              <p>38,742</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoIosTrendingUp className='text-green-500 text-2xl' />
              <p className='percentage'>1.56%</p>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}

export default Dashboard;
