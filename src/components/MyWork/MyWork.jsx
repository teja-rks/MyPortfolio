import React from 'react'
import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrowicon from '../../assets/arrow_icon.svg'
const MyWork = () => {
    return (
        <div id="portfolio" className='MyWork'>
            <div className="mywork-title">
                <h1><span>C&nbsp;</span>ertificates</h1>
                <hr />
                {/* <img src={theme_pattern}alt=''></img> */}
            </div>
            {/* <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt=''></img>
            })}
        </div> */}
          <div className="container">
            {mywork_data.map((work,index)=>{
                return (<div key={index} className="mywork-format">
                    <img src={work.w_img} alt=''></img>
                    <div className="mywork-overlay">
                        <p><a href={work.w_link} target="_blank"><img id="arrow"src={arrowicon} alt=''></img></a></p>
                        {/* <img id="arrow"src={arrowicon} alt=''></img> */}
                    </div>
                </div>);
            })}
          </div>
            
        </div>
    )
}

export default MyWork