import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { day: "Sen", gram: 0.8 },
  { day: "Sel", gram: 0.9 },
  { day: "Rab", gram: 0.7 },
  { day: "Kam", gram: 1.0 },
  { day: "Jum", gram: 0.9 },
  { day: "Sab", gram: 0.8 },
  { day: "Min", gram: 0.9 },
];

export default function DailyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip formatter={(value) => `${value} g`} />
        <Bar dataKey="gram" fill="#3b82f6" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}