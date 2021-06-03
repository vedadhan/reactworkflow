import React, { useState } from 'react';
import './ExpenseItem.css';
//import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);
   
    // const handleClick = () => {
    //     setTitle('Updated Title')
    //     //alert(title);
    // }

    console.log(props);

    return (
        <div className='expense-item'>
            <div className='expense-item__date'>
                <ExpenseDate date={props.date}/>
            </div>
            <div className='expense-item__description'><h2>{props.title}</h2></div>
            
            <div className='expense-item__price'> $ { props.Amount }</div>
            
        </div>
    )
}

export default ExpenseItem;
