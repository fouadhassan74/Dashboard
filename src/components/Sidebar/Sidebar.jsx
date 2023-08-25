import React, { useContext } from "react";
import "../Sidebar/sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link style={{ textDecoration: "none" }} to='/'>
          {" "}
          <h1>Dash board</h1>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='text'>Main</p>
          <li>
            <Link style={{ textDecoration: "none" }} to='/'>
              {" "}
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className='text'>List</p>
          <li>
            <Link style={{ textDecoration: "none" }} to='/users'>
              {" "}
              <PersonOutlineIcon className='icon' />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to='/products'>
              {" "}
              <StoreIcon className='icon' />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <CreditCardIcon className='icon' />
            <span>Order</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='text'>useful</p>
          <li>
            <InsertChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='text'>service</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon' />
            <span>Logs </span>
          </li>
          <li>
            <SettingsApplicationsIcon className='icon' />
            <span>Setting</span>
          </li>
          <p className='text'>user</p>
          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>profile</span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span>log out</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          onClick={() => {
            dispatch({ type: "LIGHT" });
          }}
          className='colorOption white'
        ></div>
        <div
          onClick={() => {
            dispatch({ type: "DARK" });
          }}
          className='colorOption black'
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
