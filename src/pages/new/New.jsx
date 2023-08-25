import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
function New({ input, title }) {
  const [file, setFile] = useState();
  return (
    <div className='newPage'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=''
            />
          </div>
          <div className='right'>
            <form>
              <div className='input'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {input.map((i) => (
                <div key={i.id} className='input'>
                  <label>{i.label}</label>
                  <input type={i.type} placeholder={i.placeholder} />
                </div>
              ))}

              <button>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
