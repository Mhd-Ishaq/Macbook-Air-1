import React from 'react'

const UserDetails = () => {
  return (
    <div className='right'>
      <div className="top">
        <div>
          <span>Gender</span>
          <p>Female</p>
          <hr />
        </div>
        <div>
          <span>Birthday</span>
          <p>Feb 24th,1997</p>
          <hr />
        </div>
        <div>
          <span>Phone number</span>
          <p>(239) 555-0108</p>
          <hr />
        </div>
        <div>
          <span>Registered Date</span>
          <p>Feb 24th,1997</p>
          <hr />
        </div>
        <div>
          <span>Street Address</span>
          <p>JL.Diponegoro No.21</p>
          <hr />
        </div>
        <div>
          <span>City</span>
          <p>Cilacap</p>
          <hr />
        </div>
        <div>
          <span>Zip Code</span>
          <p>655849</p>
          <hr />
        </div>
        <div>
          <span>Member Status</span>
          <p>Active Member</p>
          <hr />
        </div>


      </div>

      <div className="middle">
        <p className='dif'>Upcoming Appointments</p>
        <p>Past Appointments</p>
        <p>Medical Records</p>
      </div>

      <div className="bottom">
        <div className='heading'>
        <p>Root Canal Treatment</p>
        <p className='prev'>Show Previous Treatments</p>
        </div>

        <hr />

        <div className='num'>
          <div className="first">
            <div className='q h'>
              <h3>26 Nov'19</h3>
              <p>09.00 - 10.00</p>
            </div>

            <div className='q'>
              <span>Treatment</span>
              <p>Open Access</p>
            </div>

            <div>
              <span>Dentist</span>
              <p>Drg.Adam H.</p>
            </div>
            <div>
              <span>
                Nurse
              </span>
              <p>Jessicamila</p>
            </div>
            <div className='note'>
            <i className="fa-regular fa-file"></i><span >Note</span>
            </div>
          </div>

          <div className="second">
          <div className='q h'>
              <h3>26 Nov'19</h3>
              <p>09.00 - 10.00</p>
            </div>

            <div className='q'>
              <span>Treatment</span>
              <p>Open Access</p>
            </div>

            <div>
              <span>Dentist</span>
              <p>Drg.Adam H.</p>
            </div>
            <div>
              <span>
                Nurse
              </span>
              <p>Jessicamila</p>
            </div>
            <div  className='note'>
            <i className="fa-regular fa-file"></i><span>Note</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserDetails;