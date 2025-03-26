import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Header from "../components/header";

const Dashboard = () => {
  const [coins, setCoins] = useState(300);

  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {/* Recent Transactions */}
        {/* <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Recent Transactions</Typography>
          <Card sx={{ mt: 2, p: 2 }}>
            <Typography>+919856958562 Send a Payment</Typography>
            <Typography color="success.main">+500.00</Typography>
          </Card>
        </Box> */}

        {/* Orders */}
        {/* <Box sx={{ mt: 4 }}>
          <Typography variant="h6">My Orders</Typography>
          <Card sx={{ mt: 2, p: 2 }}>
            <Typography>Order ID: 12345</Typography>
            <Typography>Rajesh Kannan</Typography>
            <Typography>1 x Ooty Apple - ₹100.00</Typography>
            <Typography>5 x White Egg</Typography>
            <Button variant="contained" color="success">
              Confirm Order
            </Button>
            <Button variant="outlined" color="error">
              Reject Order
            </Button>
          </Card>
        </Box> */}
      </Box>
    </>
  );
};

export default Dashboard;
