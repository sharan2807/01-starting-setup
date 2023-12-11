import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

import Card from '../UI/Card';

const ExpenseItem = (props)=> {
    // const expenseDate="December 7th 1998";
    // const expenseTitle="Car Insurance";
    // const expenseAmount=294.67;
    // const LocationOfExpenditure="Goa"

    // const month= props.date.toLocaleString('en-US',{month: 'long'})
    // const day= props.date.toLocaleString('en-US',{day: '2-digit'})
    // const year=props.date.getFullYear();

    const [title,setTitle] = useState(props.title);

    const clickHandler=()=>{
        setTitle('Updated');
        console.log(title);
    };

    return (
    <Card className='expense-item'>
        {/* <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div> */} 
        <ExpenseDate date={props.date}></ExpenseDate>
        {/* <div className='expense-item__description'>
            <h2>{props.title}</h2>
        </div> */}
        <ExpenseDetails title={title} amount={props.amount}  location={props.location}/>
        {/* <div className='expense-item__location'>{props.location}</div>

        <div className="expense-item__price">${props.amount}</div> */} 
        <button onClick={clickHandler}>Update </button>
    </Card>
  );
}
export default ExpenseItem;
