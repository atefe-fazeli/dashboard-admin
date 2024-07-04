import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Stack, Typography } from "@mui/material";
import { HiOutlineArrowUp } from "react-icons/hi";
import { HiOutlineArrowDown } from "react-icons/hi";
import Chart from "./components/chart";
import WidgetSm from "./components/widgetsm";

const data = [
  { id: 0, title: "Revanue", total: 2153, percent: -11.4 },
  { id: 1, title: "Sales", total: 4415, percent: -1.4 },
  { id: 2, title: "Cost", total: 2225, percent: +2.4 },
];

function Home() {
  return (
    <div>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid xs={4} key={item.id}>
            <Box
              height={120}
              display="flex"
              flexDirection="column"
              justifyContent={"space-around"}
              boxShadow=" rgba(0, 0, 0, 0.75) 0 0 15px -10px"
              p={3}
              sx={{ borderRadius: "10px" }}
            >
              <Typography variant="h6">{item.title}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4">{item.total}</Typography>
                <Typography variant="body2">{item.percent}</Typography>
                {item.percent < 0 ? (
                  <HiOutlineArrowDown style={{ color: "red" }} />
                ) : (
                  <HiOutlineArrowUp style={{ color: "green" }} />
                )}
              </Stack>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Compared to last month
              </Typography>
            </Box>
          </Grid>
        ))}
        <Grid xs={12}>
          <Chart />
        </Grid>
        <Grid xs={5}>
          <WidgetSm />
        </Grid>
        <Grid xs={7}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
