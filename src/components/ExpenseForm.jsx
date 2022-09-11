import React from 'react'
import Input from './formComponents/Input'
import {useState} from "react";
import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';
import StyleContext from '../context/StyleContext';



function ExpenseForm() {
    const {newStyle} = useContext(StyleContext);
    const {hideForm} = useContext(StyleContext);
    //console.log(newStyle)
    const {handleClick} = useContext(TransactionContext);
    const obj = {
        title : "",
        date : "",
        amount : ""
    }
    const [expense, setExpense] = useState(obj);
    const handleChange = (e) => {
        let inputVal = e.target.value;
        let inputType = e.target.type;
        //console.log(inputType, inputVal)
        if ( inputType === "text"){
            setExpense( (prev) => {
                return {
                    title : inputVal,
                    date : prev.date,
                    amount : prev.amount
                }
            })
        }else if ( inputType === "date") {
            setExpense( (prev) => {
                return {
                    title : prev.title,
                    date : inputVal,
                    amount : prev.amount
                }
            })
        }else if (inputType === "number") {
            setExpense( (prev) => {
                return {
                    title : prev.title,
                    date : prev.date,
                    amount : inputVal
                }
            })
        }
    }
  return (
    <form className='expense-form' style={ newStyle ? { display : "block"} : null}>
        <h2>Enter expense details</h2>
        <i onClick={hideForm} className="fa-solid fa-xmark"></i>
        <Input expense={expense} handleChange={handleChange} type="text" name="title" placeholder="Enter expense title" label="Expense title"  />
        <Input expense={expense} handleChange={handleChange} type="date" name="date" placeholder="Enter date" label="Expense date"/>
        <Input expense={expense} handleChange={handleChange} type="number" name="amount" placeholder="Enter amount" label="Amount" />
        <button 
        onClick={(e) => {
                    handleClick(expense,e);
                    setExpense({title : "",date : "", amount : ""});
                }
            }>Add</button>
    </form>
  )
}

export default ExpenseForm