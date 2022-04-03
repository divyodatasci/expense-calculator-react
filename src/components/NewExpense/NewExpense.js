import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) =>{

  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler =  (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
      };
  const addExpenseButtonToggler = () => {
    setShowForm((prevValue) => !prevValue);

  }
    if(showForm){
      return <div className="new-expense">
        <ExpenseForm onCancel={addExpenseButtonToggler} onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    }

    return (<div className='new-expense'>
      <button onClick={addExpenseButtonToggler}>Add Expenses</button>
    </div>)
      
    
    
}

export default NewExpense;