import React, { useState, useEffect } from "react";
import Layouts from "../../Layouts";
import { IoSearchOutline } from "react-icons/io5";
import Table from "../../Shared/Table";
import { userData } from "../../../data/userData.js";
import { useNavigate } from "react-router-dom";
import Modal from "../../Shared/Modal.jsx";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

function Users() {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(userData);

  const handleClick = () => {
    navigate("/addUser");
  };

  const handleOpenModal = (user) => {
    console.log("User data in handleOpenModal:", user);
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const searchTermLower = searchTerm.toLowerCase();

    const filtered = userData.filter((Users) =>
      Object.values(Users).some(
        (value) =>
          value &&
          typeof value === "string" &&
          value.toLowerCase().includes(searchTermLower)
      )
    );

    setFilteredData(filtered);
  }, [searchTerm]);

  return (
    <Layouts>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold pl-3 py-8">All Users</h1>
        </div>
        <div className="flex justify-end">
          <div
            className="bg-white rounded-xl p-8 mr-8"
            style={{ width: "100%" }}
          >
            <div className="flex gap-2 items-center text-textGray text-sm">
              <MdOutlineTipsAndUpdates className="text-base text-primaryColor" />
              Tip : Enhance your search experience by using the email or
              username filter.
            </div>
            <div>
              <div className="flex justify-between items-center py-6">
                <div className="flex gap-6 items-center">
                  <div
                    className="w-80 flex items-center justify-between border-gray-400 rounded-lg p-2"
                    style={{ borderWidth: "1px" }}
                  >
                    <input
                    type="text"
                    placeholder="Search here..."
                    style={{ outline: 'none' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                    <IoSearchOutline className="w-[5%]" />
                  </div>
                </div>
                <button
                  className="p-3 w-52 text-xl rounded-lg"
                  style={{ border: "1px solid #2E7DFD", color: "#2E7DFD" }}
                  onClick={handleClick}
                >
                  {" "}
                  + Add User
                </button>
              </div>
            </div>
            <Table
              data={filteredData ? filteredData : userData}
              handleOpenModal={handleOpenModal}
            />
          </div>
        </div>
        {isModalOpen && (
          <div>
            <Modal user={selectedUser} onCloseModal={handleCloseModal} />
          </div>
        )}
      </div>
    </Layouts>
  );
}

export default Users;
