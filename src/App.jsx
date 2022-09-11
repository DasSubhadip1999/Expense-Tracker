import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ExpenseBody from './components/ExpenseBody';
import Account from './components/Account';
import ExpenseForm from './components/ExpenseForm';
import {TransactionProvider} from "./context/TransactionContext";
import {StyleProvider} from "./context/StyleContext";



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
                <StyleProvider>
                  <Account />
                  <ExpenseForm />
                </StyleProvider>
              </>
            }>
            </Route>
          </Routes>
        </div>
      </Router>
    </TransactionProvider>
  )
}

export default App;