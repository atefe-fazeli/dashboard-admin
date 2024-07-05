import { Avatar, Box, Stack, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const data = [
  {
    id: 0,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Pending",
  },
  {
    id: 1,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Declined",
  },
  {
    id: 2,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Approved",
  },
  {
    id: 3,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Approved",
  },
  {
    id: 4,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Approved",
  },
  {
    id: 5,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Approved",
  },
  {
    id: 6,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Approved",
  },
  {
    id: 7,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Declined",
  },
  {
    id: 8,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Declined",
  },
  {
    id: 9,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Declined",
  },
  {
    id: 10,
    name: "edi",
    date: "1 jun 2023",
    amount: "$ 12.000",
    status: "Declined",
  },
];
let bgColor={
    "Declined":"#f87171",
    "Approved":"#4ade80",
    "Pending":"#fde047",
}
function WidgetLg() {
  return (
    <Box sx={{ boxShadow: " rgba(0, 0, 0, 0.75) 0 0 15px -10px" }} p={3}>
      <Typography variant="h6" marginBottom={2} fontWeight="bold">
        Latest Transactions
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom={2}
      >
        <Typography variant="subtitle1" fontWeight="bold" width="30%">
          Customer
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" width="25%">
          Date
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" width="25%">
          Amount
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          Status
        </Typography>
      </Box>
      {data.map((item) => (
        <Box
          key={item.id}
          display="flex"
          flexDirection="row"
          alignItems="center"
          marginBottom={2}
        >
          <Stack direction="row" alignItems="center" spacing={2} width="30%">
            <Avatar alt="" src={AccountBoxIcon} />
            <Typography variant="subtitle1" fontWeight="bold">
              {item.name}
            </Typography>
          </Stack>
          <Typography variant="body2" color="gray" width="25%">
            {item.date}
          </Typography>
          <Typography variant="body2" color="gray" width="25%">
            {item.amount}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            
            justifyContent="center"
            sx={{
              padding: "8px",
              borderRadius: "10px",
              backgroundColor:bgColor[item.status],
            width:"90px",
            }
            }
            
          >
            <Typography variant="body2" color="white">
             {item.status}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
export default WidgetLg;
