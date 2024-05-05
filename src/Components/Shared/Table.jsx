import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { GrDeliver } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination"; // Import the Pagination component
import UserImage from "../../Assets/Images/dummy-profile.png";
import productImage from "../../Assets/Images/dummy-products.jpg";

function Table({ data, itemsPerPage = 10, handleOpenModal }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const keys = Object.keys(data[0]);
    const filtered = data.filter((item) =>
      keys.some((key) =>
        String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleEditClick = (user) => {
    navigate("/editUser", { state: { user } });
  };

  const openModal = (actionType, selectedItem) => {
    if (actionType === "view" && handleOpenModal) {
      handleOpenModal(selectedItem);
    }
  };

  const keys = Object.keys(data[0]);

  return (
    <div>
      {/* <div className="flex gap-6 items-center">
        
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div> */}
      <div className="bg-white w-full rounded-lg flex justify-center">
        <table className="m-0">
          <thead>
            <tr>
              {keys.map((productTitles) => (
                <th className="text-[14px] font-semibold" key={productTitles}>
                  {productTitles}
                </th>
              ))}
              <th colSpan={3}>Action</th>
            </tr>
            <tr>
              <td className="p-2"></td>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentItems.map((item) => (
              <tr key={item.id}>
                {/* Render avatar */}
                {keys.map((productTitle, index) => (
                  <td key={productTitle}>
                    {index === 0 ? (
                      <div className="flex items-center gap-3">
                        {/* Render user image beside the user name */}
                        {productTitle === "User" && (
                          <img
                            src={UserImage}
                            alt="user"
                            width={50}
                            height={50}
                            className="rounded-[50%]"
                          />
                        )}
                        {/* Render product image beside the product name */}
                        {productTitle === "Product" && (
                          <img
                            src={productImage}
                            alt="product"
                            width={50}
                            height={50}
                            className="rounded-[50%]"
                          />
                        )}
                        {/* Render customer name as a link only on customers list page */}
                        {location.pathname === "/customersList" ? (
                          <Link to={`/customer/${item.CustomerID}`}>
                            {item[productTitle]}
                          </Link>
                        ) : (
                          <span>{item[productTitle]}</span>
                        )}
                      </div>
                    ) : index === 6 ? (
                      <div
                        style={{
                          backgroundColor:
                            item.PaymentStatus === "Success"
                              ? "#EAFAF1"
                              : item.PaymentStatus === "Cancel"
                              ? "#FDEDEC"
                              : "#F8F9F9",
                          color:
                            item.PaymentStatus === "Success"
                              ? "#008000"
                              : item.PaymentStatus === "Cancel"
                              ? "#8B0000"
                              : "#4F4F4F",
                          borderRadius: "5px",
                        }}
                        className="rounded py-2 text-center text-[12px]"
                      >
                        {item[productTitle]}
                      </div>
                    ) : (
                      item[productTitle]
                    )}
                  </td>
                ))}

                <td>
                  <div className="flex items-center gap-6">
                    <MdOutlineRemoveRedEye
                      className="text-primaryColor text-lg"
                      onClick={() => openModal("view", item)}
                    />
                    <BiEditAlt
                      className="text-successColor text-lg"
                      onClick={() => handleEditClick(item)}
                    />
                    {/* Render delivery icon only for Orders page */}
                    {location.pathname === "/orders" && (
                      <Link to={"/orderTracking"}>
                        <GrDeliver className="text-primaryColor text-lg" />
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination component */}
      <div className="flex justify-end mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          containerClassName="mb-4"
          buttonClassName="border border-gray-300 px-3 rounded-full py-1 transition duration-300 ease-in-out focus:outline-none hover:bg-gray-200"
          activeButtonClassName="bg-blue-500 rounded-full text-white"
        />
      </div>
    </div>
  );
}

export default Table;
