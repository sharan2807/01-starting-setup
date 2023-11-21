import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
        <div>December 7th 1998</div>
        <div className='expense-item__description'>
            <h2>Car Insurance</h2>
        </div>
        <div className="expense-item__price">$294.67</div>
      {/* <h2>Expense Items</h2>
      <h5>Food Rs 10</h5>
      <h5>Petrol Rs 100</h5>
      <h5>Movies Rs 200</h5> */}
    </div>
  );
}
export default ExpenseItem;
