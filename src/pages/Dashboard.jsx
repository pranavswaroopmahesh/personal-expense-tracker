import { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import SummaryCards from "../components/SummaryCards";
import TransactionTable from "../components/TransactionTable";
import SearchBar from "../components/SearchBar";
import ExpensePieChart from "../components/ExpensePieChart";

function Dashboard() {
  const salary = 50000;

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [
          {
            id: 1,
            category: "food",
            amount: 350,
            date: "14/08/2026",
          },
          {
            id: 2,
            category: "fuel",
            amount: 1200,
            date: "14/08/2026",
          },
          {
            id: 3,
            category: "shopping",
            amount: 4500,
            date: "14/08/2026",
          },
        ];
  });

  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("food");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const food = transactions
    .filter((item) => item.category === "food")
    .reduce((sum, item) => sum + item.amount, 0);

  const fuel = transactions
    .filter((item) => item.category === "fuel")
    .reduce((sum, item) => sum + item.amount, 0);

  const shopping = transactions
    .filter((item) => item.category === "shopping")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpenses = transactions.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const remainingBalance = salary - totalExpenses;

  const filteredTransactions = transactions.filter((item) =>
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  function addExpense() {
    const amount = Number(expense);

    if (!amount || amount <= 0) return;

    if (editId !== null) {
      setTransactions(
        transactions.map((item) =>
          item.id === editId
            ? {
                ...item,
                category,
                amount,
              }
            : item
        )
      );

      setEditId(null);
    } else {
      setTransactions([
        ...transactions,
        {
          id: Date.now(),
          category,
          amount,
          date: new Date().toLocaleDateString("en-GB"),
        },
      ]);
    }

    setExpense("");
    setCategory("food");
  }

  function deleteExpense(id) {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  }

  function editExpense(item) {
    setEditId(item.id);
    setCategory(item.category);
    setExpense(item.amount);
  }

  return (
    <main className="dashboard">
      <h2>💰 Expense Tracker</h2>

      <SummaryCards
        salary={salary}
        food={food}
        fuel={fuel}
        shopping={shopping}
      />

      <ExpenseForm
        category={category}
        setCategory={setCategory}
        expense={expense}
        setExpense={setExpense}
        addExpense={addExpense}
        editId={editId}
      />

      <h2>Total Expenses : ₹{totalExpenses}</h2>

      <h2>Remaining Balance : ₹{remainingBalance}</h2>
      <ExpensePieChart
  food={food}
  fuel={fuel}
  shopping={shopping}
/>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <TransactionTable
        transactions={filteredTransactions}
        editExpense={editExpense}
        deleteExpense={deleteExpense}
      />
    </main>
  );
}

export default Dashboard;