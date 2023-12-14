import React from 'react';
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Supermarket",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12),location: "Chroma" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "ACKO",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "IKEA",
    },
  ];

  const addExpenseHandler=(expense)=>{
    console.log('In App.js')
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
