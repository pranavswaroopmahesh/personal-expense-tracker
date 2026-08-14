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
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="4">
                No transactions found.
              </td>
            </tr>
          ) : (
            transactions.map((item) => (
              <tr key={item.id}>
                <td>{item.date || "-"}</td>
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
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default TransactionTable;