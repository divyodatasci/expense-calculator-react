import React, {useState} from 'react';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const saveSelectedYear = (year) => {
    console.log('From Expenses.js');
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter((item) => { 
    return (item.date.getFullYear().toString() === filteredYear)
  });

  

  return (
    
    <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onSelectYear ={saveSelectedYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    
  );
}

export default Expenses;