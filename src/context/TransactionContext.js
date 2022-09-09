import { createContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({children} ) => {
    const [transaction, setTransaction] = useState([
        {
            id : 1,
            title : "Cafe Holiday",
            date : "29 Mar 2022",
            amount : "$49.56"
        },
        {
            id : 2,
            title : "Cafe Holiday",
            date : "29 Mar 2022",
            amount : "$49.56"
        },
        {   
            id : 3,
            title : "Bike Emi",
            date : "29 Mar 2022",
            amount : "$679.56"
        }
    ])
    return (
        <TransactionContext.Provider value={
            {
                transaction,
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}

export const EachExpense = ({children}) => {
    
}

export default TransactionContext;