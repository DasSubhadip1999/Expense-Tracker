import React from 'react'
import CatagoryItem from './CatagoryItem';
import catagoryData from '../data/catagoryData';

function CatagoryList() {
  //scrolling effect
  const scroll = (dir) => {
    const scrollContainer = document.querySelector(".list-wrapper");

    sideScroll(scrollContainer, dir, 10, 500, 10)

    function sideScroll(element,direction,speed,distance,step){
      let scrollAmount = 0;
      let slideTimer = setInterval(() => {
          if(direction === 'left'){
              element.scrollLeft -= step;
          }else{
              element.scrollLeft += step
          }
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer)
          }
      },speed);
    }
  }

  return (
    <div className='catagory-list'>
        <h3>Catagories</h3>
        <button onClick={() => scroll("left")} className='navigation nav-left'><i className="fa-solid fa-chevron-left"></i></button>
        <div className='list-wrapper'>
          {
            catagoryData.map( ({id,catagoryTitle}) => {
              return <CatagoryItem key={id} id={id} catagoryTitle={catagoryTitle} />
            })
          }
        </div>
        <button onClick={() => scroll("right")} className='navigation nav-right'><i className="fa-solid fa-chevron-right"></i></button>
        <button className='addbtn'>+ Add New</button>
    </div>
  )
}

export default CatagoryList