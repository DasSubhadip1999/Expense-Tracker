import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
        Tracker
      </div>
      <div className='menubar'>
        <ul>
          <li>Home</li>
          <li>Catagories</li>
          <li>Transaction</li>
          <li>Calender</li>
          <li>Events</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar