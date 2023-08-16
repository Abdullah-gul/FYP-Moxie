import React from 'react'
import './LeadSettings.css'
const LeadSettings = () => {
  return (
    <div className='dash-lead-setting-main-container'>
      <div className="dash-lead-setting-main-wrapper">
        <p className='dash-lead-setting-para'>Lead settings</p>
        <div className='dash-empty-div'></div>
        <div className="service-butn-container">
          <p className='dash-lead-setting-para-1'>Services</p>
          <button className='c-d-butn'>Edit</button>
        </div>
        <p className='dash-lead-setting-para-2'>You'll receive leads in these categories</p>
         <div className="dash-servicenames">
          <p className='dash-lead-setting-para-3'>
          Web Design
          </p>
         </div>
      </div>

    </div>
  )
}

export default LeadSettings