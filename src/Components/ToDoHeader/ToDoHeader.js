import React from 'react'
import al from "../../Assets/applanch.png"
import './ToDoHeader.css'
import sr from "../../Assets/search_h.svg"
import st from"../../Assets/settings.png"
import qs from "../../Assets/qmark.png"
import ac from "../../Assets/announce.png"
import us from '../../Assets/user.png'

function ToDoHeader() {
  return (
    <div className='ToDo_header'>
        <div className="head_fs"><img src={al} alt="img" className='ap_launch' />
            <p className='s1'>To Do</p></div>
            
            <div className="search_box">
                <button className='search'><img src={sr} alt="img" className='search_img' /></button>
            </div>
            <div className="last_img">
                <img src={st} alt="img"  className='las_img'/>
                <img src={qs} alt="img" />
                <img src={ac} alt="img" className='las_img' />
                <img src={us} alt="img"  className='las_img'/>
            </div>
        </div>

    
  )
}

export default ToDoHeader