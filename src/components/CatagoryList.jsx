import React from 'react'
import CatagoryItem from './CatagoryItem';
import catagoryData from '../data/catagoryData';

function CatagoryList() {
  return (
    <div className='catagory-list'>
        <h3>Catagories</h3>
        <button className='navigation nav-left'><i className="fa-solid fa-chevron-left"></i></button>
        <div className='list-wrapper'>
            {
                catagoryData.map( ({id,catagoryTitle}) => {
                    return <CatagoryItem key={id} id={id} catagoryTitle={catagoryTitle} />
                })
            }
        </div>
        <button className='navigation nav-right'><i className="fa-solid fa-chevron-right"></i></button>
        <button className='addbtn'>+ Add New</button>
    </div>
  )
}

export default CatagoryList