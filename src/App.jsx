import React from 'react'
import Sidebar from './components/Sidebar';
import ExpenseBody from './components/ExpenseBody';
import Account from './components/Account';

function App() {
  return (
    <div className='container'>
        <Sidebar />
        <ExpenseBody />
        <Account />
    </div>
  )
}

export default App;