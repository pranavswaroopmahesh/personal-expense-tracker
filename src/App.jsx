import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <h2>Welcome Back!</h2>

        <button>Add Expense</button>

        <h3>Recent Transactions</h3>

        <p>No transactions yet.</p>
      </main>
    </>
  );
}

export default App;