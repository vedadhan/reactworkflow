import React, { useState } from 'react';
import './ExpenseForm.css';
//import ExpensesFilter from '../ExpensesFilter';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     amount: '',
    //     date: ''
    // })

    const inputHandler = (event) => {  
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
        setEnteredTitle(event.target.value);
    };

    const amountHandler = event => {
        // setUserInput((prevState) => {
        //     return {...prevState, amount:event.target.value}
        // });
        //setAmount(event.target.value);
        setAmount(event.target.value);
    };

    const dateHandler = event => {
        // setUserInput((prevState) => {
        //     return {...prevState, date: event.target.value}
        // });
        setDate(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: amount,
            date: new Date(date)
        }
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={inputHandler} value={enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amountHandler} value={amount} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-03-31' onChange={dateHandler} value={date} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
            
        </form>
    )
}

export default ExpenseForm;
