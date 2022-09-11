import { createContext, useState } from "react";
import uuid from 'react-uuid';
const TransactionContext = createContext();

export const TransactionProvider = ({children} ) => {
    const [transaction, setTransaction] = useState([])

    const handleClick = (expense,e) => {
        e.preventDefault();
        expense.key = uuid();
        expense.id = transaction.length;
        console.log(expense);
        setTransaction((prev) => {
            return [
                ...transaction,
                expense,
            ]
        });
        //console.log(transaction)
    }

    const deleteTransaction = (id) => {
        setTransaction( (items) => {
           return (
            items.filter( (item) => {
                return id !== item.id
            })
           )
        })
    }

    

    return (
        <TransactionContext.Provider value={
            {
                transaction,
                handleClick,
                deleteTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}



export default TransactionContext;