import React, { useContext, useState } from 'react';
import Graphs from './Graphs';
import FormButton from './FormButton';
import TransactionContext from '../context/TransactionContext';
import {motion, AnimatePresence} from "framer-motion"
import { useEffect } from 'react';


function Account() {
  const {totalExpense, leftAmount} = useContext(TransactionContext);
  const [nameChange, setNameChange] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("")

  const setNameFn = (event) => {
    let text = event.target.value;
    setName(text)
  }

  useEffect( () => {
    getName();
  }, [])

  const getName = async () => {
    let res = await fetch('/username/1')
    let data = await res.json()
    setUsername(data.name)
  }

  const updateName = async () => {
    let res = await fetch('/username/1', {
      method : "PUT",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({name})
    });
    let data = await res.json();
    setUsername(data.name)
    setName('')
  }
 
  const showNameForm = () => {
    setNameChange((prev) => {
      return !prev
    })
    if ( name.trim(" ").length > 0) {
      updateName();
    }else if(nameChange) {
      alert("Name can't be empty")
    }
    
  }

  return (
    <div className='account'>
      <div className='profile'>
        <div className='image'>
          <img alt='profileLogo' src='https://scontent.fccu9-1.fna.fbcdn.net/v/t1.6435-9/95389059_108925234139104_7357623262626447360_n.png?stp=dst-png_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=85a577&_nc_ohc=3Jf2HkPlffoAX9T-uDc&_nc_ht=scontent.fccu9-1.fna&oh=00_AT-3ANV832-42jVV7QUeH8LOolKt3lxVPGPgz9WRriRw0g&oe=633E7E44' />
        </div>
        <h4>Welcome<p>{username}</p></h4>
        <div>
          <AnimatePresence>
          <motion.div initial={ {opacity : 0}} animate={ {opacity : 1} } exit= { {opacity : 0}}>
          {
            !nameChange ? (
              <>
                <p>Name</p>
                <i onClick={showNameForm} className="fa-solid fa-pen"></i>
              </>
            ) : (
              <>
                <input placeholder='Enter name' onChange={setNameFn} maxLength="8" type="text" value={name} />
                <i onClick={() => {showNameForm()}}  className="fa-solid fa-check"></i>
              </>
            )
          }
          </motion.div>
          </AnimatePresence>
        </div>
        <div><p>Display Picture</p><i className="fa-solid fa-gear"></i></div>
        <div><p>Wallet</p><i className="fa-solid fa-wallet"></i></div>
      </div>
      <Graphs type="income" amount="145000" />
      <Graphs type="expense" amount={totalExpense()} />
      <FormButton />
    </div>
  )
}

export default Account