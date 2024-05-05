import Login from "../Components/Pages/LoginPage/Login";
import Dashboard from "../Components/Pages/Dashboard"
import {Route,Routes} from "react-router-dom";
import Product from "../Components/Pages/Product";
import CustomersList from "../Components/Pages/Customers/index";
import CustomerProfile from "../Components/Pages/Customers/CustomerProfile"
import Users from "../Components/Pages/Users";
import Oders from "../Components/Pages/Orders";
import Discount from "../Components/Pages/Discount";
import SettingsPage from "../Components/Pages/Settings";
import AddProduct from "../Components/Pages/Product/AddProduct";
import AddUser from "../Components/Pages/Users/AddUser";
import EditUser from "../Components/Pages/Users/EditUser";
import ResetPassword from "../Components/Pages/LoginPage/ResetPassword";
import ForgotPassword from "../Components/Pages/LoginPage/ForgotPassword";
import OrderDetails from "../Components/Pages/Orders/OrderDetails";
import OrderTracking from "../Components/Pages/Orders/OrderTracking"
import HospitalList from "../Components/Pages/Facilities/FacilityList";
import LocationsList from "../Components/Pages/Facilities/LocationsList";
import AddNewFacility from "../Components/Pages/Facilities/AddNewFacility";

const PageRouting = () => {
  return ( 
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/facilityList' element={<HospitalList/>} />
        <Route path='/addFacility' element={<AddNewFacility/>}/>
        <Route path='/locationList' element={<LocationsList/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/customersList' element={<CustomersList/>} />
        <Route path="/customer/:customerId" element={<CustomerProfile/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/orders' element={<Oders/>} />
        <Route path='/discount' element={<Discount/>} />
        <Route path='/setting' element={<SettingsPage/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/editUser' element={<EditUser/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path='/orderDetails' element={<OrderDetails/>}/>
        <Route path='/orderTracking' element={<OrderTracking/>}/>
     </Routes>
    
  );
};
export {PageRouting} ;