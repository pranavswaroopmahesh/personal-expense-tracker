import Card from "./Card";
import { useState } from "react";
import Card from "./Card";

function Dashboard() {
    const [count, setCount] = useState(0);
  return (
    <main className="dashboard">
      <h2>Welcome Back! 👋</h2>

      <div className="cards">
        <Card title="Total Balance" amount="₹0" />
        <Card title="Income" amount="₹0" />
        <Card title="Expenses" amount="₹0" />
        <Card title="Savings" amount="₹0" />
      </div>
      <h3>Counter: {count}</h3>

<button
  className="add-btn"
  onClick={() => setCount(count + 1)}
>
  Click Me
</button>

      <button className="add-btn">
        + Add Expense
      </button>

      <h3>Recent Transactions</h3>

      <p>No transactions yet.</p>
    </main>
  );
}

export default Dashboard;