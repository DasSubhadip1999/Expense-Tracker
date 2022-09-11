import React from 'react'

function CatagoryItem({catagoryTitle, id}) {
     let bgColor = (+id[1] % 2 === 0) ? {backgroundColor : "#fe7798"} : {backgroundColor : "#51cfce"}
  return (
    <div style={bgColor}  className='catagory-item'>{catagoryTitle}</div>
  )
}

export default CatagoryItem