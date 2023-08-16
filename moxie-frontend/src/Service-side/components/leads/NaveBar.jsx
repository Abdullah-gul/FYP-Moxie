import React, { Fragment } from 'react'
import './NaveBar.css'
import { Link } from 'react-router-dom'
import logo from "../../../asset/pngegg.png";
const NaveBar = () => {
  return (
    <Fragment>
      <div className="s">
      <div className='naveWrapper'>
        <div className='logo-container'>
            <img style={{ width: "100%" }} src={logo} alt="" />
        </div>

        <div className='right'>
          <div><Link className='service-links' to='/dash'>Dashboard</Link></div>
          <div>
            <Link className='service-links' to='/leads'>Leads</Link>
          </div>
          <div><Link className='service-links' to='/responce'>My Responce </Link></div>
          <div><Link className='service-links' to='/settings'>Settings</Link></div>
          {/* <div>Help</div> */}
          <div className='btn-container'>
            <div className='butn'>
              <button>drop</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  )
}

export default NaveBar
