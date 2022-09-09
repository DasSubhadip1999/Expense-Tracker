import React from 'react'
import Input from './formComponents/Input'
import {useState} from "react";
import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';
import {Link} from "react-router-dom";

function ExpenseForm() {
    const {transaction} = useContext(TransactionContext);
    const [expenseList, setExpenseList] = useState(transaction)
    const obj = {
        title : "",
        date : "",
        amount : ""
    }
    const [expense, setExpense] = useState(obj);

    const handleChange = (e) => {
        let inputVal = e.target.value;
        let inputType = e.target.type;
        console.log(inputType, inputVal)
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



    const handleClick = (e) => {
        e.preventDefault();
        setExpenseList([...expenseList, expense])
    }
  return (
    <form className='expense-form'>
        <h2>Enter expense details</h2>
        <Input handleChange={handleChange} type="text" name="title" placeholder="Enter expense title" label="Expense title"  />
        <Input handleChange={handleChange} type="date" name="date" placeholder="Enter date" label="Expense date"/>
        <Input handleChange={handleChange} type="number" name="amount" placeholder="Enter amount" label="Amount" />
        <button onClick={handleClick}>Add</button>
    </form>
  )
}

export default ExpenseForm