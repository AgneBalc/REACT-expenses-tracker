import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => filteredYear === expense.date.getFullYear().toString());

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart
          expenses={filteredExpenses}
        />
        <ExpensesList
          items={filteredExpenses}
        />
      </Card>
    </div>
  );
}

export default Expenses;