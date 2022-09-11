import React, { useContext } from 'react';
import Graphs from './Graphs';
import FormButton from './FormButton';
import TransactionContext from '../context/TransactionContext';

function Account() {
  const {totalExpense} = useContext(TransactionContext)
 


  return (
    <div className='account'>
      <div className='profile'>
        <div className='image'>
          <img alt='profileLogo' src='https://scontent.fccu9-1.fna.fbcdn.net/v/t1.6435-9/95389059_108925234139104_7357623262626447360_n.png?stp=dst-png_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=85a577&_nc_ohc=3Jf2HkPlffoAX9T-uDc&_nc_ht=scontent.fccu9-1.fna&oh=00_AT-3ANV832-42jVV7QUeH8LOolKt3lxVPGPgz9WRriRw0g&oe=633E7E44' />
        </div>
        <h4>Welcome John</h4>
        <div><p>Profile</p><i className="fa-solid fa-pen"></i></div>
        <div><p>Settings</p><i className="fa-solid fa-gear"></i></div>
        <div><p>Wallet</p><i className="fa-solid fa-wallet"></i></div>
      </div>
      <Graphs type="income" amount="145,000" />
      <Graphs type="expense" amount={totalExpense()} />
      <FormButton />
    </div>
  )
}

export default Account