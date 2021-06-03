import React, { useState } from 'react';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpenses from './components/NewExpense.js/NewExpenses';
import './App.css';
//import ExpensesFilter from './components/ExpensesFilter';

const DUMMY_EXPENSES = [
  {id: '01',
   title: 'Mobile',
   Amount: Math.random(),
   date: new Date(2022, 10 ,30),
  },

  {id: '02',
    title: 'Laptop',
    Amount: Math.random(),
    date: new Date(2020, 9 ,15),
   },

   {id: '03',
    title: 'Watch',
    Amount: Math.random(),
    date: new Date(2019, 4 ,28),
   },

   {id: '04',
    title: 'Books',
    Amount: Math.random(),
    date: new Date(2021, 7 ,4),
   },
]


function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expenses);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }


//console.log(expenses);

  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
