import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layouts from "../../../Layouts";

function EditUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  if (!user) {
    // Handle the case where user data is not available
    console.error("User data is undefined or null.");
    // You can redirect or display an error message
    return <div>Error: User data not available</div>;
  }

  return (
    <Layouts>
      <div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Edit User</h1>
        </div>
        <div className="px-8 py-4 my-8 bg-white rounded-lg h-screen">
          <form>
            <div className="flex flex-col justify-center ">
              <div className="flex flex-col bg-white rounded-xl p-6 mx-1">
                <div className="my-2">
                  <div>
                    <div className="my-2">
                      <label className="text-lg font-medium">User Name</label>
                    </div>
                    <input
                      type="text"
                      value={user?.User}
                      className="w-1/2 outline-none border-borderColor border-2 p-2 rounded-lg"
                    />
                  </div>
                </div>
                <div className="my-2">
                  <div>
                    <div className="my-2">
                      <label className="text-lg font-medium">Email</label>
                    </div>
                    <input
                      type="email"
                      value={user?.Email}
                      className="w-1/2 outline-none border-borderColor border-2 p-2 rounded-lg"
                    />
                  </div>
                </div>
                <div className="my-2">
                  <div>
                    <div className="my-2">
                      <label className="text-lg font-medium">Contact</label>
                    </div>
                    <input
                      type="tel" // Use type 'tel' for telephone numbers
                      value={user?.Phone} // Use user.Contact instead of user.Phone
                      className="w-1/2 outline-none border-borderColor border-2 p-2 rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 p-6">
                <button className="min-w-32 p-3 bg-primaryColor text-white rounded-lg font-semibold">
                  Add product
                </button>
                <button className="min-w-32 p-3 border border-dangerColor text-dangerColor rounded-lg font-semibold">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layouts>
  );
}

export default EditUser;
