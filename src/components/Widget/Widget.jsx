import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
function Widget({ type }) {
  let data;
  let amount = 100;
  let difference = 20;
  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        links: "See all users",
        icon: (
          <PersonOutlinedIcon
            className='icon'
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        links: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "earning",
        isMoney: true,
        links: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "balance",
        isMoney: true,
        links: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className='icon'
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{amount}</span>
        <span className='links'>{data.links}</span>
      </div>
      <div className='right'>
        <div className='percentage'>
          <KeyboardArrowUpIcon />
          {difference}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
