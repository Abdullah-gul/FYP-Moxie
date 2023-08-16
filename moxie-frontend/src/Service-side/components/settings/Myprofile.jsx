import React from 'react'
import './myprofile.css'
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import About from './About';
const Myprofile = () => {

  const navigate = useNavigate();

  return (
    <div className='profile-main-container'>
      <div className='profile-main-wrapper'>
        <button className='c-d-butn one1' onClick={()=> navigate('/settings')}><KeyboardBackspaceIcon style={{"width":"28px"}}/> settings</button>
        <div className="about-container"><About/></div>
      </div>
    </div>
  )
}

export default Myprofile