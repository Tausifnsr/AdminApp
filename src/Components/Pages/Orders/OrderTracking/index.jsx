import React from "react";
import Layouts from "../../../Layouts";
import ProgressBar from "./ProgressBar";

function OrderTracking() {
  const steps = [
    {
      title: "Step 1",
      content: "This is the content of step 1",
    },
    {
      title: "Step 2",
      content: "This is the content of step 2",
    },
    {
      title: "Step 3",
      content: "This is the content of step 3",
    },
  ];

  return (
    <div>
      <Layouts>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Track Order</h1>
        </div>
        <div className="flex bg-white rounded-xl pb-6">
          <div className="py-4 mx-4">
            <img
              className="h-[250px] w-[250px] mx-2 rounded-xl"
              src="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/711jtvyLkKL._SL1500_.jpg"
              alt=""
            />
          </div>
          <div>
            <table className="w-[700px]">
              <tbody>
                <tr className="">
                  <td className="bg-white font-semibold pt-5 pb-2">
                  ASUS Zenbook 14X OLED, Intel Core i5-12500H 12th Gen, 14 inch (35.56 cm) 2.8K 90Hz OLED, Thin and Light Laptop (16GB/512GB/Win11)
                  </td>
                </tr>
                <tr className="">
                  <td className="py-2 bg-white">
                    <span className="text-gray-500">Brand:</span>
                    &nbsp;&nbsp;Apple
                  </td>
                </tr>
                <tr className="">
                  <td className="py-2 bg-white">
                    <span className="text-gray-500">OrderID:</span>
                    &nbsp;&nbsp;#ORD001
                  </td>
                </tr>
                <tr className="">
                  <td className="py-2 bg-white">
                    <span className="text-gray-500">Order Date:</span>
                    &nbsp;&nbsp;20 Jan 2024
                  </td>
                </tr>
                <tr className="">
                  <td className="py-2 bg-white">
                    <span className="text-gray-500">Quantity</span>&nbsp;&nbsp;1
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex">
              <button className="text-blue-500 mt-3 mx-3 py-1 rounded-md border-blue-500 border-2 w-[150px] flex justify-center items-center">
                View Shop
              </button>
              <button className="text-blue-500 mt-3 mx-3 py-1 rounded-md border-blue-500 border-2 w-[150px] flex justify-center items-center">
                View Product
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl my-4 py-4">
          <div className="font-semibold mx-8 pb-2 text-[20px]">Detail</div>
          <div className="mx-8 text-gray-500">Your Item is on the Way. Tracking information will be available within 24 hours.</div>
          <div>
            <ProgressBar steps={steps} />
          </div>
        </div>
        <div className="bg-white rounded-xl py-4">
          <table className="w-[95%] bg-white mx-auto mt-4">
            <tbody> 
              <tr className="rounded-xl">
              <th className="">Date</th>
              <th className="">Time</th>
              <th className="">Description</th>
              <th className="">Location</th>
              </tr>
              
              <tr className="border-b-2 border-gray-200 text-gray-500">
                  <td className="bg-white py-2">20 Jan 2024</td>
                  <td className="bg-white py-2">2:30 PM</td>
                  <td className="bg-white py-2">The sender is preparing the order.</td>
                  <td className="bg-white py-2">ABC Yard, Lucknow, Uttar Pradesh</td>
              </tr>
              <tr className="border-b-2 border-gray-200 text-gray-500">
                  <td className="bg-white py-2">20 Jan 2024</td>
                  <td className="bg-white py-2">6:30 PM</td>
                  <td className="bg-white py-2">The order is ready to Dispatch</td>
                  <td className="bg-white py-2">ABC Yard, Lucknow, Uttar Pradesh</td>
              </tr>
              <tr className="border-b-2 border-gray-200 text-gray-500">
                  <td className="bg-white py-2">21 Jan 2024</td>
                  <td className="bg-white py-2">5:00 AM</td>
                  <td className="bg-white py-2">The order has been Dispatched</td>
                  <td className="bg-white py-2">ABC Yard, Lucknow, Uttar Pradesh</td>
              </tr>
              <tr className="border-b-2 border-gray-200 text-gray-500">
                  <td className="bg-white py-2">22 Jan 2024</td>
                  <td className="bg-white py-2">1:00 PM</td>
                  <td className="bg-white py-2">Recieved at HUB nearest to you.</td>
                  <td className="bg-white py-2">XYZ HUB, Bengaluru, Karnataka</td>
              </tr>
              <tr className="border-b-2 border-gray-200 text-gray-500">
                  <td className="bg-white py-2">23 Jan 2024</td>
                  <td className="bg-white py-2">9:00 AM</td>
                  <td className="bg-white py-2">Item Out for Delivery</td>
                  <td className="bg-white py-2">Address, Bengaluru, Karnataka</td>
              </tr>
              <tr className="border-b-2 border-gray-200 text-gray-500">
                  <td className="bg-white py-2">23 Jan 2024</td>
                  <td className="bg-white py-2">02:20 PM</td>
                  <td className="bg-white py-2">Item Delivered</td>
                  <td className="bg-white py-2">Address, Bengaluru, Karnataka</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layouts>
    </div>
  );
}

export default OrderTracking;
