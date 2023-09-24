import React from 'react';
import './Layout.css'
import ToDoHeader from '../ToDoHeader/ToDoHeader'
import ToDoSidebar from '../ToDoSidebar/ToDoSidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <ToDoHeader/>
        
        <div className="content_space">
        <ToDoSidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout