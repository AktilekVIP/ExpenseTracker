import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpencesChart from "./ExpencesChart";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("All");
  const selectChangeHandler = ({ target: { value } }) => {
    setSelectedYear(value);
  };
  const getCurrentExpenses = ()=>{
    if(selectedYear === 'All'){
      return expenses
    }return expenses.filter((expense)=>{
      return expense.date.getFullYear().toString() === selectedYear
    })
  }
  const renderedExpenses = getCurrentExpenses()
  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeSelectedYear={selectChangeHandler}
      />
      <ExpencesChart expenses={renderedExpenses}/>
      <ExpensesList expenses={renderedExpenses} />
    </Card>
  );
}

export default Expenses;
