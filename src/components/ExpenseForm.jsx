function ExpenseForm({
  category,
  setCategory,
  expense,
  setExpense,
  addExpense,
  editId,
}) {
  return (
    <div className="form">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="food">Food</option>
        <option value="fuel">Fuel</option>
        <option value="shopping">Shopping</option>
      </select>

      <input
        type="number"
        placeholder="Enter Amount"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />

      <button onClick={addExpense}>
        {editId !== null ? "Update Expense" : "Add Expense"}
      </button>
    </div>
  );
}

export default ExpenseForm;