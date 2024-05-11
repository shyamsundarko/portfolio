import React from 'react'
import '../../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
        <div className="topHalf">
            <div className="profilePicContainer">
                <img src="images/profilePic.jpg" alt="profile pic" className="profilePic" />
            </div>
            <div className="name">Shyam Sundar</div>
            <div className="designation">Software Engineer</div>
        </div>
        <hr />
        <div className="bottomHalf">
            <div className="emailContainer">
                <div className="emailIcon">
                    <img src="images/email.png" alt="email icon" />
                </div>
                <div className="subBlock">
                    <div className="emailTitle">GMAIL</div>
                    <a href="mailto:shyamsundarko@gmail.com" className="emailValue">shyamsundarko</a>
                </div>
                
            </div>
            <div className="phoneContainer">
                <div className="phoneIcon">
                    <img src="images/phone.png" alt="phone icon" />
                </div>
                <div className="subBlock">
                    <div className="phoneTitle">PHONE</div>
                    <div className="phoneValue">(980) 369-8620</div>
                </div>
                
            </div>
            <div className="homeContainer">
                <div className="homeIcon">
                    <img src="images/home.png" alt="home icon" />
                </div>
                <div className="subBlock">
                    <div className="homeTitle">FROM</div>
                    <div className="homeValue">Singapore</div>
                </div>
                
            </div>
            <div className="currentLocationContainer">
                <div className="currentLocationIcon">
                    <img src="images/currentLocation.png" alt="current location icon" />
                </div>
                <div className="subBlock">
                    <div className="currentLocationTitle">CURRENT LOCATION</div>
                    <div className="currentLocationValue">United States</div>
                </div>
                
            </div>
            <div className="contactContainer">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/shyam-s-208166137/">
                        <img src="images/linkedin.png" alt="linkedin icon" />
                    </a>
                    
                </div>
                {/* <div className="gmail">
                    <a href="mailto:shyamsundarko@gmail.com">
                        <img src="images/gmail.png" alt="email icon" />
                    </a>
                    
                </div> */}
                <div className="github">
                    <a href="https://github.com/shyamsundarko">
                        <img src="images/github.png" alt="github icon" />
                    </a>
                </div>
                <div className="instagram">
                    <a href="https://www.instagram.com/byamiloboy/?hl=en">
                        <img src="images/instagram.png" alt="instagram icon" />
                    </a>
                </div>
            </div>
        </div>
    </div>
)
}

export default Sidebar