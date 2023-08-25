import React from "react";
import "./single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navber from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/List/List";
function Single() {
  return (
    <div className='singlrPage'>
      <Sidebar />
      <div className='singleContainer'>
        <Navber />
        <div className='top'>
          <div className='left'>
            <button className='btn-edit'>Edit</button>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                alt=''
                className='itemImg'
              />
              <div className='details'>
                <h1 className='itemTitle'>Jane Doe</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>janedoe@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+1 2345 67 89</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart title='Last 6 month stats' aspect={3 / 1} />
          </div>
        </div>
        <div className='bottom'>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
