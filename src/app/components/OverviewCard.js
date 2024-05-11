import React from 'react'

const OverviewCard = ({imageLink, title, desc}) => {
  return (
        <div className="overviewCardContainer">
                <div className="overviewIcon">
                    <img src={imageLink} alt="icon" />
                </div>
                <div className="sub">
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                </div>
                
            </div>
  )
}

export default OverviewCard