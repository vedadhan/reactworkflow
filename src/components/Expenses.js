import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        // console.log('Expenses.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    console.log(props);

    return (
        <div>
            <ExpensesFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler} />
            {props.items.map((expense) => <ExpenseItem title={expense.title} 
                    Amount={expense.Amount} date={expense.date} key={expense.id} />)}
            
        </div>
    )
}

export default Expenses;
