import { createContext, useEffect, useState } from "react";
import uuid from 'react-uuid';
const TransactionContext = createContext();


export const TransactionProvider = ({children} ) => {
    
    const [transaction, setTransaction] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTransaction = async () => {
        let res = await fetch("/transaction?_sort=id&_order=desc");
        let data = await res.json();
        setTransaction(data);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchTransaction();
    },[])

    //add each expense to list 
    const handleClick = async (expense, editExpense, e) => {
        e.preventDefault();
        expense.key = uuid();
        //for edit mode
        if(editExpense.edit) {
            const res = await fetch(`/transaction/${expense.id}`, {
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(expense)
            })
            const data = await res.json();
            let newTransaction = transaction.map((item) => {
                return expense.id === item.id ? {
                    ...item, ...data
                } : item
            })
            setTransaction(newTransaction);
        }else { //normal add 
            const res = await fetch("/transaction", {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(expense)
            })
            const data = await res.json()
            
            setTransaction((prev) => {
                return [data,...prev]
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
    const deleteTransaction = async (id) => {
        if(window.confirm("Are you sure, you want to delete")){
            await fetch( `/transaction/${id}`, {method : "DELETE"} )

            setTransaction( (items) => {
                return (
                 items.filter( (item) => {
                     return id !== item.id
                 })
                )
             })
        }   
    }

    const totalExpense = () => {
        return (
            transaction.reduce((acc, curItem) => {
                return acc + (+curItem.amount)
            },0)
        )
    }
    
    const leftAmount = () => {
        let totalIncome = 145000;
        let tE = totalExpense();
        return totalIncome - tE;
    }
    //console.log(titleArr)
    const [searchText, setSearchText] = useState("")
    const searchExpense = (event) => {
        //console.log(event.target.value)
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
                totalExpense,
                searchExpense,
                isLoading,
                leftAmount
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}


export default TransactionContext;