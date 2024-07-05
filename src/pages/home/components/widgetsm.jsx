import { Avatar, Box, Stack, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
const data = [
  { id: 0, name: "edi", role: "softwer engeneer" },
  { id: 1, name: "edi", role: "softwer engeneer" },
  { id: 2, name: "edi", role: "softwer engeneer" },
  { id: 3, name: "edi", role: "softwer engeneer" },
  { id: 4, name: "edi", role: "softwer engeneer" },
  { id: 5, name: "edi", role: "softwer engeneer" },
  { id: 6, name: "edi", role: "softwer engeneer" },
  { id: 7, name: "edi", role: "softwer engeneer" },
  { id: 8, name: "edi", role: "softwer engeneer" },
  { id: 9, name: "edi", role: "softwer engeneer" },
  { id: 10, name: "edi", role: "softwer engeneer" },
];
function WidgetSm() {
  return (
    <Box sx={{ boxShadow: " rgba(0, 0, 0, 0.75) 0 0 15px -10px" }} p={3}>
      <Typography variant="h6" marginBottom={2} fontWeight="bold">
        New Join Members
      </Typography>

      {data.map((item) => (
        <Box
          key={item.id}
          display="flex"
          flexDirection="column"
          marginBottom={2}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar alt="" src={AccountBoxIcon} />
              <Stack direction="column">
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="gray">
                  {item.role}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                padding: "8px",
                borderRadius: "10px",
                backgroundColor: "#f4f4f5",
              }}
            >
              <VisibilityIcon color="success" />
              <Typography variant="body2" color="gray">
                display
              </Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
export default WidgetSm;
