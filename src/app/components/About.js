import React from 'react'
import OverviewCard from './OverviewCard'
const About = () => {
  return (
    <div className="aboutContainer">
        {/* <div className="navbar"></div> */}
        <div className="aboutMeContainer">
            <div className="pageTitle">About Me</div>
            <hr className="titleAccent" />
            <div className="aboutContent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <div className="whatImDoing">
          <div className="pageTitle">What I'm Doing</div>
          <hr className="titleAccent" />
          <div className="whatImDoingContainer">
              <OverviewCard imageLink="images/startup.png" 
              title="Founding a tech startup" 
              desc="In the process of incorporating my company named dine which is a full-fledged restaurant digitization system." />
              <OverviewCard imageLink="images/education.png" 
              title="Pursuing a Masters" 
              desc="I am in the second year of my MS in Software Engineering Systems in Northeastern University, Boston." />
              <OverviewCard imageLink="images/leetcode.png" 
              title="Daily leetcode and frontend practice" 
              desc="I am a firm believer that small but steady daily actions create massive transformations over time." />
              <OverviewCard imageLink="images/camera.png" 
              title="Photography" 
              desc="Since my army days, photography has been my escape. I have done freelance professional photography for over 50 of my clients." />
          
          </div>
        </div>
        
    </div>
  )
}

export default About