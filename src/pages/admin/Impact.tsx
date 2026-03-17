// pages/admin/Impact.tsx
import React from "react";
import "./Impact.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", meals: 400 },
  { name: "Feb", meals: 700 },
  { name: "Mar", meals: 1200 },
];

const Impact: React.FC = () => {
  return (
    <div>
      <h2>Impact Reports</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="meals" stroke="#3b7a5e" />
      </LineChart>
    </div>
  );
};

export default Impact;
