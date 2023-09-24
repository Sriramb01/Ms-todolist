import React from 'react'
import './Header.css'
import mg from "../Assets/Microsoftlg.png"
import da from "../Assets/DA.png"
import sr from "../Assets/Search-Outline.png"
import ct from "../Assets/Cart-Outline.png"
import pr from "../Assets/person.svg"
import left from "../Assets/welcome-left.png"
import right from "../Assets/welcome-right.png"
import lg from "../Assets/logo.png"
import ad from "../Assets/android.svg"
import wd from "../Assets/windows.svg"
import app from "../Assets/apple.svg"
import {navigate, useNavigate} from 'react-router-dom'
function Header() {
  const navigate =useNavigate();

  const handleNavigate =(str)=>{
    navigate(str)
  }
  return (
    <div className='home_container'>
        <div className="header_up">
            <div className="header_left"><img src={mg} alt="logo" className='main_logo'/> 
            
            
              <nav>
              <p className="nav_bar">Mircosoft 365</p>
              <p className="nav_bar">Teams</p>
              <p className="nav_bar">Windows</p>
              <p className="nav_bar">Surface</p>
              <p className="nav_bar">Xbox</p>
              <p className="nav_bar">Deals</p>
              
              <p className="nav_bar">Support</p>
              <p className="nav_bar">Small Business</p>
              </nav>
            </div>
            <div className="header_right">
              <div className="header_right-nav">
                <p className='nav_image'>All Microsoft <img src={da} alt="img" /></p>
                <p className='nav_image'>Search <img src={sr} alt="img" className='m_image'/></p>
                <p className='nav_image'>Cart <img src={ct} alt="logo" className='m_image'/></p>
                <p className='nav_image'>Sign in <img src={pr} alt="img" className='m_image'/></p>
              </div>
            </div>
        </div>
           <div className="body">
            <div className="body_left">
              <img src={left} alt="img"  className='left_image'/>
            </div>
            <div className="body_center"><img src={lg} alt="logo" className='tick'/>
            <p className='p1_s'>Microsoft To Do</p>
            <p className='p1_s2'>To Do give you focus,from work to play</p>
            <button className='get_started' onClick={()=>handleNavigate('sigin')}>Get started</button>
            <p className='p1_s3'>Learn more</p>
            <p className='p1_s4'>Download To Do</p>
            
            <div className="para_img">
            <img src={ad} alt="img" className='ad_img'/>
            <img src={wd} alt="img"className='ad_img' />
            <img src={app} alt="img" className='ad_img' />
            
            </div>
            <p className='p1_s5'>Terms of use To Do</p>  
            </div>
            <div className="body_right">
              <img src={right} alt="img" className='right_image' />
             
            </div>
    
           </div>
           <div className="footer">
            <div className="footer_left">
              <p className='p2_s1'>What's new</p>
              <p>Surface pro 9</p>
              <p>Surface Laptop 5</p>
              <p>Surface 2+</p>
              <p>Surface Laptop Go2</p>
              <p>Surface Laptop studio</p>
              <p>Surface Go3 </p>
              <p>Microsoft 365</p>
              <p>Windows 11 app</p>
              <p></p>
            </div>
            <div className="header_left1">
              <p className='p3_s1'>Microsoft Store </p>
              <p>Account profile</p>
              <p>Download Center</p>
              <p>Microsoft Store support</p>
              <p>Returns</p>
              <p>Order tracking</p>
              <p> Certified Refurbished</p>
              <p>Microsoft Store promise</p>
              <p>Flexible payments</p>
            </div>
            <div className="footer_center">
              <p className='p4_s1'>Education</p>
              <p>Microsoft in education</p>
              <p>Device for education</p>
              <p>Microsoft teams for education</p>
              <p>Microsoft 365 education</p>
              <p>How to buy for your school</p>
              <p>Educatore training and development</p>
              <p>Deals for student and parents</p>
              <p>Azure for students</p>
            </div>
            <div className="footer_center1">
              <p className="p5_s1">Businees</p>
              <p>Microsoft cloud</p>
              <p>Microsoft Security</p>
              <p>Dynamic 365</p>
              <p>Microsoft 365</p>
              <p>Microsoft power platform</p>
              <p>Microsoft teams</p>
              <p>Microsoft industry</p>
              <p>Small business</p>
      
            </div>
            <div className="footer_right">
              <p className="p6_s1">Developer & IT</p>
              <p>Azure </p>
              <p>Developer Center</p>
              <p>Documentation</p>
              <p>Microsoft learn</p>
              <p>Microsoft tech community</p>
              <p>Azure market place</p>
              <p>App source</p>
              <p>Visual Studio</p>
            </div>
            <div className="footer_right1">
              <p className="p7_s1">Company</p>
              <p>Carrers</p>
              <p>About microsoft</p>
              <p>Company mews</p>
              <p>Privacy at microsoft</p>
              <p>Investors</p>
              <p>Diversity amd inclusion</p>
              <p>Accessibility</p>
              <p>Sustainability</p>
            </div>
            
            </div>
            <div className="footer_under1">
            <p>English (Unites States)</p>
            <p>Your privacy choices</p>
            <p> sitemap</p>
            <p>Contact microsoft</p>
            <p>Privacy</p>
            <p>Terms of use</p>
            <p>Trademarks</p>
            <p>Safety&co</p>
            <p>Recycling</p>
            <p>About our ads</p>
            <p>Microsoft 2023</p>
           </div>
          
           
    </div>
  )
}

export default Header