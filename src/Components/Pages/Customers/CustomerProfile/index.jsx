import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customerData } from "../../../../data/customerData"; // Assuming you have customer data available
import Layouts from "../../../Layouts";
import { IoIosArrowForward } from "react-icons/io";
import backgroundImage from "../../../../Assets/Images/cool-background.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function CustomerProfile() {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const navigate = useNavigate();

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }

  useEffect(() => {
    // Find the customer with the matching customerId
    const foundCustomer = customerData.find(
      (customer) => customer.CustomerID === customerId
    );
    setCustomer(foundCustomer);
  }, [customerId]);

  if (!customer) {
    return <div className="text-center">Customer not found</div>;
  }

  const handleClick = () => {
    navigate('/orderTracking');
  }

  const electronicProducts = [
    {
      name: "OnePlus 12 (Silky Black, 12 GB RAM, 256GB)",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71o8VehMHXL._SL1500_.jpg",
      deliveryStatus: "Delivered",
    },
    {
      name: "ASUS Zenbook 14X OLED, Intel Core i5-12500H 12th Gen, 14 inch (35.56 cm) 2.8K 90Hz OLED, Thin and Light Laptop (16GB/512GB/Win11)",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/711jtvyLkKL._SL1500_.jpg",
      deliveryStatus: "In Transit",
    },
    {
      name: "Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display, RAM 8 GB, ROM 128 GB Expandable, Wi-Fi Tablet, Silver",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/6100f2qmEnL._SL1500_.jpg",
      deliveryStatus: "Pending",
    },
    {
      name: "Noise Newly Launched Vortex Plus 1.46” AMOLED Display, AoD, BT Calling, Sleek Metal Finish, 7 Days Battery Life, All New OS with 100+ Watch Faces",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71MUcw4ab2L._SL1500_.jpg",
      deliveryStatus: "Delivered",
    },
    {
      name: "Zebronics Jet PRO Premium Wired Gaming On Ear Headphone with LED for Headband + earcups, 40mm Neodymium Drivers, 2 Meter Braided Cable, with mic.",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71VR6c3j2bL._SL1500_.jpg",
      deliveryStatus: "Delivered",
    },
  ];

  return (
    <Layouts>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-2xl font-bold">Customer Profile</h1>
          <div className="flex items-center gap-3">
            <span>Customer</span>
            <IoIosArrowForward className="text-gray-400" />
            <span className="text-gray-400">Customer Profile</span>
          </div>
        </div>
        <div
          className="mt-8 bg-white rounded-xl shadow-lg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-2">
              Personal Information
            </h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="font-semibold text-lg text-gray-900 my-4"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className=" w-1/3 text-lg border-2 bg-transparent focus:outline-none border-black px-3 py-2 rounded-md"
                  value={customer.Customer}
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-semibold text-lg text-gray-900 my-4"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className=" w-1/3 text-lg border-2 bg-transparent focus:outline-none border-black px-3 py-2 rounded-md"
                  value={customer.Email}
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="font-semibold text-lg text-gray-900 my-4"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  className=" w-1/3 text-lg border-2 bg-transparent focus:outline-none border-black px-3 py-2 rounded-md"
                  value={customer.PhoneNumber}
                  readOnly
                />
              </div>
            </div>
            {/* Render additional customer details as needed */}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2 p-8">Order History</h2>
          <div className="px-8 py-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Delivery Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {electronicProducts.map((product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={product.image}
                            alt={product.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {truncate(product?.name, 70)}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                      {truncate(product.description, 30)}
                      </div>
                    </td> */}
                    <td className=" mt-5 px-6 flex py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.deliveryStatus}
                      </span>
                      {product.deliveryStatus === "In Transit" ||
                      product.deliveryStatus === "Pending" ? (
                        <button className="ml-2 flex px-2 text-blue-600 rounded-md text-2xl" onClick={handleClick}  >
                          <CiDeliveryTruck className=""/>
                        </button>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default CustomerProfile;
