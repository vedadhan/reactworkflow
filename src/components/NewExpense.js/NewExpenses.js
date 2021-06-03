import React from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

function NewExpenses(props) {

    const saveExpenseData = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };
       // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>
    )
}

export default NewExpenses;
