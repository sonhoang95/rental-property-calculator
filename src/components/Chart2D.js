import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart2D = ({ installments }) => {
  const data = installments.map((installment, index) => ({
    name: index,
    principle: installment.capital,
    interest: installment.interest,
  }));

  return (
    <div className="max-w-[1000px] h-[500px] mx-auto my-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="interest" stroke="#8884d8" />
          <Line type="monotone" dataKey="principle" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart2D;
