import React, { useState } from 'react';

const Index_Footer = () => {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
  const [openDropdown4, setOpenDropdown4] = useState(false);

  const toggleDropdown1 = () => setOpenDropdown1(!openDropdown1);
  const toggleDropdown2 = () => setOpenDropdown2(!openDropdown2);
  const toggleDropdown3 = () => setOpenDropdown3(!openDropdown3);
  const toggleDropdown4 = () => setOpenDropdown4(!openDropdown4);

  return (
    <div className='index-footer'>

        <div className="footer">
          <div className="footer-container">
            <div className="custom-select-container">
              <div className={`custom-select ${openDropdown1 ? 'open' : ''}`} onClick={toggleDropdown1}>
              Employers
                <span className={`custom-select-arrow ${openDropdown1 ? 'up' : 'down'}`}></span>
              </div>
              <div className={`custom-dropdown-container ${openDropdown1 ? 'show' : ''}`}>
                {openDropdown1 && (
                  <div className="custom-dropdown">
                    <a href="#link1">Employer Login</a>
                    <a href="#link2">Join mRecruiters</a>
                  </div>
                )}
              </div>
            </div>

            <div className="custom-select-container">
              <div className={`custom-select ${openDropdown2 ? 'open' : ''}`} onClick={toggleDropdown2}>
              Job Seekers
                <span className={`custom-select-arrow ${openDropdown2 ? 'up' : 'down'}`}></span>
              </div>
              <div className={`custom-dropdown-container ${openDropdown2 ? 'show' : ''}`}>
                {openDropdown2 && (
                  <div className="custom-dropdown">
                    <a href="#link1">Job Seekers Login</a>
                    <a href="#link3">Search Tips</a>
                    <a href="#link2">Help</a>
                  </div>
                )}
              </div>
            </div>

            <div className="custom-select-container">
              <div className={`custom-select ${openDropdown3 ? 'open' : ''}`} onClick={toggleDropdown3}>
              Company Info
                <span className={`custom-select-arrow ${openDropdown3 ? 'up' : 'down'}`}></span>
              </div>
              <div className={`custom-dropdown-container ${openDropdown3 ? 'show' : ''}`}>
                {openDropdown3 && (
                  <div className="custom-dropdown">
                    <a href="#link1">About Us</a>
                    <a href="#link2">Contact Us</a>
                    <a href="#link3">Send Feedback</a>
                  </div>
                )}
              </div>
            </div>

            <div className='custom-select-container'>
              <p className='ml-2'><a href="" style={{color : "white",textDecoration : "none"}}>Partnerships</a></p>
            </div>
          </div>
        </div>


      
      <div className='social' style={{ border: "1px solid gray" }}>
        <div className='links'>
          <p className='ml-2'><span><img src="./Images/Footer/telephone.png" height="20px" alt="" /> <a href="">Toll No: +91 80 6985 7811</a></span> <span className='text-light ml-2'>|</span> <span className='ml-2'><a href="">Toll Free No: 1800-419-6666</a></span></p>
        </div>

        <div className='links'>
          <p className='ml-2'><span><img src="./Images/Footer/email.png" height="25px" alt="" /> <a href="">info@foundit.in</a></span></p>
        </div>

        <div className='links media'>
          <p className='ml-2'><span>Stay Connected</span>
            <a href=""><img src="./Images/Footer/white-facebook.png" height="24px" alt="" /></a>
            <a href=""><img src="./Images/Footer/white-twitter.png" height="24px" alt="" /></a>
            <a href=""><img src="./Images/Footer/white-linkedin.png" height="24px" alt="" /></a>
            <a href=""><img src="./Images/Footer/white-insta.png" height="24px" alt="" /></a>
            <a href=""><img src="./Images/Footer/youtube.png" height="24px" alt="" /></a>
          </p>
        </div>

        <div className='links'>
          <p className='ml-2'><span><a href="">Security & Fraud</a> | <a href="">Privacy Policy</a> | <a href="">Terms of Use</a> | <a href="">Beware of Fraudsters</a> | <a href="">Be Safe</a></span></p>
          <p className='text-light ml-2' style={{  fontSize : "17px"}}>© 2024 foundit | All rights Reserved</p>
        </div>

      </div>
    </div>
  );
};

export default Index_Footer;
