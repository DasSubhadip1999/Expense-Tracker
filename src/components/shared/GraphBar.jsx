import React from 'react'
import {AnimatePresence, motion} from "framer-motion";

function GraphBar({amount,id}) {
  let h = amount * 0.01
  let bg = id % 2 === 0 ? "red" : "orange";
  return (
    <AnimatePresence>
      <li className='graph-bar'>
        <motion.div
          key={id}
          initial = { {height : "0px", opacity : 0} }
          animate = { {height : `${h}px`, opacity : 1}}
          exit = { {opacity : 0} }
        >
          <div 
            className='bars' 
            style={{height : `${h}px`, backgroundColor : bg}}
          >
          </div>
        </motion.div>
        <span>{id}</span>
      </li>
    </AnimatePresence>
  )
}

export default GraphBar