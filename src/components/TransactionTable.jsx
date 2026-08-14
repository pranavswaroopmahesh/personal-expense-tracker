function TransactionTable({
  transactions,
  editExpense,
  deleteExpense,
}) {
  return (
    <>
      <h2>Transaction History</h2>

      <table className="history-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.category}</td>
              <td>₹{item.amount}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => editExpense(item)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteExpense(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TransactionTable;