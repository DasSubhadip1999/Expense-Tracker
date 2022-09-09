import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ExpenseBody from './components/ExpenseBody';
import Account from './components/Account';
import ExpenseForm from './components/ExpenseForm';
import {TransactionProvider} from "./context/TransactionContext";



function App() {
  return (
    <TransactionProvider>
      <Router>
        <div className='container'>
          <Routes>
            <Route 
            path='/' 
            element = {
              <>
                <Sidebar />
                <ExpenseBody />
                <Account />
              </>
            }>
            </Route>
            <Route path='/form' element={<ExpenseForm />}  />
          </Routes>
        </div>
      </Router>
    </TransactionProvider>
  )
}

export default App;