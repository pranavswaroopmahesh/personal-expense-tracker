import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#3B82F6", "#22C55E", "#F59E0B"];

function ExpensePieChart({ food, fuel, shopping }) {
  const data = [
    { name: "Food", value: food },
    { name: "Fuel", value: fuel },
    { name: "Shopping", value: shopping },
  ];

  return (
    <div className="chart-container">
      <h2>Expense Distribution</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpensePieChart;