import { createContext, useState } from "react";
import uuid from 'react-uuid';
const TransactionContext = createContext();

export const TransactionProvider = ({children} ) => {
    let sampleData = { key : "s1", id: "samp1", title : "Bike", date : "2022-09-21", amount : "45678"}
    const [transaction, setTransaction] = useState([sampleData])

    //add each expense to list 
    const handleClick = (expense, editExpense, e) => {
        e.preventDefault();
        expense.key = uuid();
        //for edit mode
        if(editExpense.edit) {
            let newTransaction = transaction.map((item) => {
                return expense.id === item.id ? {
                    ...item, ...expense
                } : item
            })
            setTransaction(newTransaction)
        }else { //normal add 
            expense.key = uuid();
            expense.id = transaction.length;
            //console.log(expense);
            setTransaction((prev) => {
                return [...transaction,expense]
            });
        }
        //console.log(transaction)
    }
    //default state of edit expense
    const [editExpense, setEditExpense] = useState( {expenseItem : {}, edit : false,} )
    //setting earlier created expense object to edit expense
    const editExpenseFn = (expenseItem) => {
        setEditExpense({
            expenseItem,
            edit : true
        });
        setIsDisabled(true);
    }
    //to disable add transaction on form fill
    const [isDisabled, setIsDisabled] = useState(false)

    // delete expense from the list
    const deleteTransaction = (id) => {
        if(window.confirm("Are you sure, you want to delete")){
            setTransaction( (items) => {
                return (
                 items.filter( (item) => {
                     return id !== item.id
                 })
                )
             })
        }   
    }

    
    return (
        <TransactionContext.Provider value={
            {
                transaction,
                handleClick,
                deleteTransaction,
                editExpenseFn,
                editExpense,
                setEditExpense,
                isDisabled,
                setIsDisabled,
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}


export default TransactionContext;