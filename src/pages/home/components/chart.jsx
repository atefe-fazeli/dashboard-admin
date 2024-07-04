import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  { name: "Feb", sale: 400 },
  { name: "Mar", sale: 300 },
  { name: "Apr", sale: 250 },
  { name: "May", sale: 500 },
  { name: "Jun", sale: 150 },
  { name: "Jul", sale: 200 },
  { name: "Agu", sale: 100 },
  { name: "Sep", sale: 400 },
  { name: "Oct", sale: 300 },
  { name: "Nov", sale: 250 },
  { name: "Des", sale: 360 },
];
function Chart() {
  return (
    <Box boxShadow=" rgba(0, 0, 0, 0.75) 0 0 15px -10px" padding={3}>
      <Typography variant="h6" marginBottom={2}>Month sales</Typography>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="sale" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
export default Chart;
