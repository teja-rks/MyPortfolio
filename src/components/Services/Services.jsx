import React from 'react'
import './Services.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import services_Data from '../../assets/services_data'
// import arrow_item from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1><span>P&nbsp;</span>rojects</h1>
            <hr/>
            {/* <img src={theme_pattern} alt=""></img> */}
        </div>
        <div className="services-container">
            {services_Data.map((services,index)=>{
                return <div key={index} className="services-format">
                    <h3>{services.s_no}</h3>
                    <h2>{services.s_name}</h2>
                    <div className="clo">Technology:&nbsp;</div><p>{services.s_tech}</p>
                    <div className="clo">Description:&nbsp;</div><p>{services.s_desc}</p>
                    {/* <div className="services-readmore">
                         <p>Read More</p>
                         <img src={arrow_item} alt=''></img>   
                    </div>     */}
                 </div>
            })}
        </div>
    </div>
  )
}

export default Services