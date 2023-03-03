import React from 'react';

const Sidebar = () => {
  return (
    <div className='side'>
    <div style={{backgroundColor:"green",height:"40px",textAlign:"center",padding:"5px",marginBottom:"5px"}}>M</div>
    <ul>
      <li><i className="fa-regular fa-plus"></i> <p>NEW</p></li>
      <li><i className="fa fa-user" aria-hidden="true"></i> <p>PATIENT</p></li>
      <li><i className="fa-regular fa-folder-open"></i> <p>FOLDER</p></li>
      <li><i className="fa fa-upload" aria-hidden="true"></i> <p>UPLOAD</p></li>
      <li><i className="fa fa-file" aria-hidden="true"></i> <p>REPORT</p></li>
      <li><i className="fa fa-cog" aria-hidden="true"></i> <p>SETTING</p></li>
      <li><i className="fa fa-sign-out" aria-hidden="true"></i> <p>LOGOUT</p></li>
    </ul>
    </div>
  )
}

export default Sidebar