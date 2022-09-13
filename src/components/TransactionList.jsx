import React from 'react'
import TransactionItem from './TransactionItem';
import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';
import Spinner from './shared/Spinner';
import {motion, AnimatePresence} from "framer-motion";



function TransactionList() {
  //whole array from context to create each item
  const {transaction, isLoading} = useContext(TransactionContext);
  if( !isLoading && (!transaction || transaction.length === 0) ) {
    return (<h4>No Expenses yet</h4>)
  }
  return isLoading ? <Spinner /> : (
    <div className='transaction-list'>
        <h3>Transactions</h3>
        <AnimatePresence>
        {
            transaction.map( ({title,date,amount,id}) => {
                return (
                  <motion.div 
                    key={id} 
                    initial={ {opacity : 0} }
                    animate={ {opacity : 1} }
                    exit={ {opacity : 0} }
                  >
                    <TransactionItem id={id} key={id} title={title} date={date} amount={amount}  />
                  </motion.div>
                )
            })
        }
        </AnimatePresence>
    </div>
  )
}

export default TransactionList;