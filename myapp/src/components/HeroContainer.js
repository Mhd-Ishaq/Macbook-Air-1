import React from 'react';
import { pic } from '../Constants';

const HeroContainer = () => {
  return (
    <div className='face'>
      <div className="container-face">
        <div className='image-container'>
          <img src={pic} alt="face" />
        </div>

        <div>
        <h3>Diane Cooper</h3>
        <p>diane.cooper@example.com</p>
        </div>

        <div className='number'>
          <div className="f">
            <h5>15</h5>
            <p>Past</p>
          </div>
          <div className="g">
            <h4>02</h4>
            <p>Upcoming</p>
          </div>
        </div>

        <span className="msg">Send Message</span>
      </div>

      <div className="files">
        <p>Files/Documents</p>

        <ul>
        <li><i className="fa-regular fa-file"></i><span>Check Up Results.pdf</span> </li>
      <li><i className="fa-regular fa-file"></i><span>Check Up Results.pdf</span></li>
      <li><i className="fa-regular fa-file"></i><span>Medical Prescription.pdf</span> </li>
      <li><i className="fa-regular fa-file"></i><span>Dental X-Ray Result.pdf</span> </li>
        </ul>
      </div>

    </div>
  )
}

export default HeroContainer