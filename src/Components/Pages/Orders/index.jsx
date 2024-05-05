import React, { useState, useEffect } from "react";
import Layouts from "../../Layouts";
import { orderData } from "../../../data/orderData.js";
import { IoSearchOutline } from "react-icons/io5";
import Table from "../../Shared/Table.jsx";
import Modal from "../../Shared/Modal.jsx";

function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(orderData);

  const handleModal = (actionType, selectedObj) => {
    setIsModalOpen((prevState) => !prevState);
    if (actionType === "view") {
      setSelectedItem(selectedObj);
    }
  };

  useEffect(() => {
    const searchTermLower = searchTerm.toLowerCase();

    const filtered = orderData.filter((Orders) =>
      Object.values(Orders).some(
        (value) =>
          value &&
          typeof value === "string" &&
          value.toLowerCase().includes(searchTermLower)
      )
    );

    setFilteredData(filtered);
  }, [searchTerm]);
  return (
    <>
      <Layouts>
        <div>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">All Orders</h1>
          </div>
          <div className="flex">
            <div className="bg-white rounded-xl p-8">
              <div>
                <div className="flex justify-between items-center py-6">
                  <div className="flex gap-3 items-center w-full">
                    <div
                      className="w-[30%] flex items-center justify-between border-borderColor border rounded-lg py-2 px-5 "
                      style={{ borderWidth: "1px" }}
                    >
                      <input
                    type="text"
                    placeholder="Search here..."
                    style={{ outline: 'none' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                      <IoSearchOutline className="text-xl" />
                    </div>
                  </div>
                  <button className="py-[7px] w-52 text-base font-semibold rounded-lg border border-primaryColor text-primaryColor ">
                    {" "}
                    <span className="font-normal text-lg pr-3">+</span> Add new
                  </button>
                </div>
              </div>
              <Table data={filteredData ? filteredData : orderData} />
            </div>
          </div>
        </div>
      </Layouts>
      {isModalOpen && (
        <Modal selectedItem={selectedItem} handleModal={handleModal} />
      )}
    </>
  );
}

export default Orders;
