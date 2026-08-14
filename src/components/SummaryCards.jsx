import Card from "./Card";

function SummaryCards({ salary, food, fuel, shopping }) {
  return (
    <div className="cards">
      <Card title="Salary" amount={salary} />
      <Card title="Food" amount={food} />
      <Card title="Fuel" amount={fuel} />
      <Card title="Shopping" amount={shopping} />
    </div>
  );
}

export default SummaryCards;