// import React from "react";
// import { Box, Button, Typography, Paper, Link } from "@mui/material";
// import { green } from "@mui/material/colors";
// import Logo from "../assets/NoChat.png";
// import bgImage from "../assets/background.png";

// const NotAvailableStore = () => {
//   return (
//     <Box
//     sx={{
//       position: "relative",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "100vh",
//       overflow: "hidden",
//       "::before": {
//         content: '""',
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         filter: "brightness(20%)",
//         zIndex: -1,
//       },
//     }}

//     >
//       <Paper
//         elevation={6}
//         sx={{
//           p: 4,
//           borderRadius: 3,
//           maxWidth: 300,
//           textAlign: "center",
//           backgroundColor: "#fff",
//         }}
//       >
//         {/* Logo */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             // backgroundColor: green[500],
//             // p: 2,
//             // borderRadius: "50%",
//             // width: 90,
//             // height: 90,
//             margin: "0 auto",
//           }}
//         >
//           <img src={Logo} alt="Logo" style={{ width: "80%", height: "100%" }} />
//         </Box>

//         {/* Title */}
//         <Typography variant="h5" fontWeight="bold" mt={2}>
//         No stores are linked to this account
//         </Typography>
//         <Typography variant="body1" color="gray" mt={1}>
//         Enter your account details correctly or register your store with us
//         </Typography>
//         {/* Buttons */}
//         <Button
//           fullWidth
//           variant="contained"
//           sx={{ backgroundColor:" #668D12", color: "#fff", mt: 3 }}
//         >
//           Register your store with us
//         </Button>
//         <Button fullWidth
//         variant="outlined" sx={{ color:" #668D12", borderColor: "#ACC43F", mt: 2, textTransform: "none", }}>
//         Login with different account
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default NotAvailableStore;
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import BackgroundWrapper from "../Login/Backgroundimage";
import AuthCard from "../Authcard/authcard";
import Logo from "../assets/NoChat.png";
import { buttonStyle, outlinedButtonStyle } from "./LoginStyles";
import { useNavigate } from "react-router-dom";

const NotAvailableStore = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <BackgroundWrapper>
      <AuthCard>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            // width: 70,
            // height: 70,
          }}
        >
          <img src={Logo} alt="Logo" style={{ width: "80%", height: "100%" }} />
        </Box>

        <Typography variant="h5" fontWeight="bold" mt={2}>
          No stores are linked to this account
        </Typography>
        <Typography variant="body1" color="gray" mt={1}>
          Enter your account details correctly or register your store with us
        </Typography>

        <Button fullWidth variant="contained" sx={buttonStyle}>
          Register your store with us
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleLogin}
          sx={outlinedButtonStyle}
        >
          Login with different account
        </Button>
      </AuthCard>
    </BackgroundWrapper>
  );
};

export default NotAvailableStore;
