import React from "react";
import "./home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import List from "../../components/List/List";
function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgetContainer'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='Charts'>
          <Featured />
          <Chart aspect={2 / 1} title='Last 6 months (Revnue)' />
        </div>
        <div className='list'>
          <h1 className='listTitle'>Last transictions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Home;
