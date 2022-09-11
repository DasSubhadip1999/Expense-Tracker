import React from 'react'
import Input from './formComponents/Input'
import {useState} from "react";
import { useContext } from 'react';
import { useEffect } from 'react';
import TransactionContext from '../context/TransactionContext';
import StyleContext from '../context/StyleContext';



function ExpenseForm() {
    const {newStyle} = useContext(StyleContext);
    const {hideForm, showForm} = useContext(StyleContext);

    //console.log(newStyle)
    const {handleClick, editExpense, setIsDisabled, setEditExpense } = useContext(TransactionContext);
    const obj = {
        id : "",
        title : "",
        date : "",
        amount : ""
    }
    useEffect( () => {
        if(editExpense.edit) {
            showForm();
            console.log(editExpense.expenseItem);
            setExpense(editExpense.expenseItem)
        }
    }, [editExpense])
    const [expense, setExpense] = useState(obj);
    const handleChange = (e) => {
        let inputVal = e.target.value;
        let inputType = e.target.type;
        //console.log(inputType, inputVal)
        if ( inputType === "text"){
            setExpense( (prev) => {
                return {
                    id : prev.id,
                    title : inputVal,
                    date : prev.date,
                    amount : prev.amount
                }
            })
        }else if ( inputType === "date") {
            setExpense( (prev) => {
                return {
                    id : prev.id,
                    title : prev.title,
                    date : inputVal,
                    amount : prev.amount
                }
            })
        }else if (inputType === "number") {
            setExpense( (prev) => {
                return {
                    id : prev.id,
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
        <i 
            onClick = {
                () => {
                hideForm();
                setExpense({title : "",date : "", amount : ""});
                setIsDisabled(false);
                setEditExpense({
                    expenseItem : {},
                    edit : false,
                })
                
            }
        }
            className="fa-solid fa-xmark">
        </i>
        <Input expense={expense} handleChange={handleChange} type="text" name="title" placeholder="Enter expense title" label="Expense title"  />
        <Input expense={expense} handleChange={handleChange} type="date" name="date" placeholder="Enter date" label="Expense date"/>
        <Input expense={expense} handleChange={handleChange} type="number" name="amount" placeholder="Enter amount" label="Amount" />
        <button 
        onClick={(e) => {
                    //console.log(expense)
                    handleClick(expense, editExpense ,e);
                    setExpense({title : "",date : "", amount : ""});
                }
            }>Add</button>
    </form>
  )
}

export default ExpenseForm