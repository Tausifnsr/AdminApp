import React, { useEffect, useState } from 'react';
import Layouts from '../../../Layouts';
import { IoIosArrowForward } from 'react-icons/io';
import { FaChevronDown } from "react-icons/fa";
import { orderData } from '../../../../data/orderData';
import {data} from '../../../../data/data';
import { CiDeliveryTruck } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function OrderDetails() {

    const [currCustomerData,setCurrCustomerData] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const customerId = localStorage.getItem("selectedItem");
        const customerOrder = orderData.find(
          (item) => item.CustomerId === customerId
        );
    
        if (customerOrder) {
          const orderedProductIds = customerOrder.products.map(
            (product) => product.productId
          );
          const orderedProducts = data.filter((item) =>
            orderedProductIds.includes(item.HSN_Code)
          );
          setCurrCustomerData(orderedProducts);
        }
      }, []);

      const handleClick = () => {
        navigate('/orderTracking');
      }

      const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
      }
    
      const calculateTotalPrice = () => {
        if (!currCustomerData || currCustomerData.length === 0) {
          return 0;
        }
    
        return currCustomerData.reduce(
          (total, item) => total + parseFloat(item.MRP),
          0
        );
      };

    // return (
    //     <Layouts>
    //         <div>
    //             <div className='flex items-center justify-between mr-12'>
    //                 <h1 className='text-3xl font-bold pl-32 py-8'>Order Details</h1>
    //             </div>
    //             <div>
    //             <div className='bg-white rounded-xl p-8 mr-8' style={{ width: '90%' }}>
    //                     <div className='mx-8'>
    //                         <div className='flex justify-between rounded-lg bg-primaryColor items-center p-4'>
    //                             <h1 className='text-xl font-semibold'>All item</h1>
    //                             <div className='flex items-center gap-2'>
    //                                 <span className='font-semibold'>Sort</span><FaChevronDown/>
    //                             </div> 
    //                         </div>
    //                     </div>
    //                     <div className='ordered mx-8'>
    //                         {
    //                             currCustomerData &&
    //                             currCustomerData.map((item,idx) => {
    //                                 return(
    //                                     <div key={idx} className='item flex justify-around items-center rounded-lg my-3'>
    //                                         <div className='flex flex-col items-start'>
    //                                             <p className='text-gray-400'>Product name</p>
    //                                             <p>{item.Product}</p>
    //                                         </div>
    //                                         <div>
    //                                             <p className='text-gray-400'>Quantity</p>
    //                                             <p className='font-semibold'>1</p>
    //                                         </div>
    //                                         <div>
    //                                             <p className='text-gray-400'>Price</p>
    //                                             <p className='font-semibold'>{item.MRP}</p>
    //                                         </div>
    //                                     </div>
    //                                 )
    //                             })
    //                         }
    //                         <div>
    //                             <div className='flex justify-between'>
    //                                 <p>Cart Totals</p>
    //                                 <p>Price</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </Layouts>
    // )
    return (
        <Layouts>
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold">Order Details</h1>
            </div>
            <div className="w-full flex">
              <div className='w-[65%]'>
                <div className="bg-white h-auto rounded-xl">
                  <div className="mx-2 py-4 text-[20px] font-bold flex">
                    <div>
                      <img className="h-[250px] w-[250px] mx-2 rounded-xl" src="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/711jtvyLkKL._SL1500_.jpg" alt="" />
                    </div>
                    <div>
                      <table className="w-[470px]">
                        <tbody>
                          <tr>
                            <td className="text-[14px] bg-white font-semibold">{truncate("ASUS Zenbook 14X OLED, Intel Core i5-12500H 12th Gen, 14 inch (35.56 cm) 2.8K 90Hz OLED, Thin and Light Laptop (16GB/512GB/Win11)", 150)}</td>
                          </tr>
                          <tr>
                            <td className="text-[14px] bg-white font-normal">Quantity: 1</td>
                          </tr>
                          <tr>
                            <td className="text-[14px] bg-white font-bold">MRP: <span className="text-[#E74C3C] text-[24px] ml-2">$701.40</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="my-4 bg-white h-auto rounded-xl">
                  <div className="mx-2 py-4 text-[20px] font-bold">
                    <table className="w-[75%] text-[14px] font-normal flex">
                      <tbody>
                        <tr>
                          <th className="">Cart Total</th>
                          <th className="">Price</th>
                        </tr>
                        <tr className="border-b-2">
                          <td className="py-2 font-semibold bg-white">
                            Subtotal
                          </td>
                          <td className="bg-white ">$701.14</td>
                        </tr>
                        <tr className="border-b-2">
                          <td className="py-2 font-semibold bg-white">
                            Shipping
                          </td>
                          <td className="bg-white ">$10.13</td>
                        </tr>
                        <tr className="border-b-2">
                          <td className="py-2 font-semibold" bg-white>
                            Tax(GST)
                          </td>
                          <td className=" bg-white">$10.38</td>
                        </tr>
                        <tr className="">
                          <td className="py-2 font-semibold bg-white">
                            Total Price:
                          </td>
                          <td className=" font-semibold text-[#E74C3C] bg-white">
                            $721.65
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='w-[35%]'>
                <div className="flex">
                  <div className="mx-8 rounded-xl px-3 py-2 font-semibold bg-white">
                    Summary:
                    <table className="w-full text-[14px] font-normal my-1 flex justify-center">
                      <tbody className="flex-col justify-around">
                        <tr className="">
                          <td className="py-1 font-semibold bg-white">
                            OrderID:
                          </td>
                          <td className="font-semibold bg-white">#ORD001</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-semibold bg-white">
                            Date:
                          </td>
                          <td className="font-semibold bg-white">
                            20th January, 2024
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1 font-semibold bg-white">
                            Total:
                          </td>
                          <td className="font-semibold text-[#E74C3C] bg-white">
                            $721.65
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mx-8 my-4 rounded-xl px-3 py-2 font-semibold bg-white">
                  Shipping Address
                  <div className="my-2 py-1 px-2 font-normal text-[14px] text-gray-500">
                    3517 W, Gray Street, Utica, Pennsylvenia 57867
                  </div>
                </div>
                <div className="mx-8 my-4 rounded-xl px-3 py-2 font-semibold bg-white">
                  Payment Method
                  <div className="my-2 py-1 px-2 font-normal text-[14px]">
                    Pay on Delivery (Cash/Card), Cash On Delivery(COD), Card/Net
                    banking acceptance subject to device availability.
                  </div>
                </div>
                <div className="mx-8 my-4 rounded-xl px-3 py-2 font-semibold bg-white">
                  Expected Date Of Delivery
                  <div className="my-2 py-1 px-2 font-normal text-[14px] text-green-500">
                    30th January, 2024
                    <div>
                      <button className="text-blue-500 mt-3 py-1 rounded-md border-blue-500 border-2 w-[100%] flex justify-center items-center" onClick={handleClick}>
                        <CiDeliveryTruck className="text-[20px] font-extrabold mr-2" />
                        Track Order
                      </button>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </Layouts>
      );
}

export default OrderDetails