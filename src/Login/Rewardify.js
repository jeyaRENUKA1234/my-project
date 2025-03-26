import React, { useState } from "react";
import { Box, Button, Typography, Paper, Link, TextField } from "@mui/material";
import Logo from "../assets/Frame.png";
import bgImage from "../assets/background.png";
import Axios from "axios";
import { GENERATE_OTP_API } from "../components/Apiconst";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

const Rewardify = () => {
  const [contactNo, setContactNo] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!contactNo) {
      toast.error("Please enter a valid Shop ID or Mobile Number.");
      return;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contactNo)) {
      toast.error("Please enter a valid 10-digit mobile number.", {
        position: "top-right",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await Axios.post(GENERATE_OTP_API, {
        dialCode: 91,
        contactNo,
      });
      if (response?.data?.message) {
        toast.success(response?.data?.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
        });
        // <ToastContainer />;
        setTimeout(() => {
          navigate("/otp_verification", { state: { dialCode: 91, contactNo } });
        }, 1000);
      } else {
        toast.error(response?.data?.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(20%)",
          zIndex: -1,
        },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 300,
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 70,
            height: 70,
            margin: "0 auto",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* Title */}
        <Typography variant="h5" fontWeight="bold" mt={2}>
          Get started with REWARDIFY
        </Typography>
        <Typography variant="body1" color="gray" mt={1}>
          Enter your mobile number(or)
          <br />
          Shop ID to get started
        </Typography>
        {/* Buttons */}
        {/* Input Field */}
        <TextField
          fullWidth
          placeholder="Enter shop ID / Mobile Number"
          variant="outlined"
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#F8F8F8",
              padding: "0px",
            },
          }}
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: " #668D12",
            color: "white",
            borderRadius: "5px",
            textTransform: "none",
            padding: "9px 0px",
          }}
          onClick={handleSendOTP}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send OTP"}
        </Button>

        {/* Terms & Conditions */}
        <Typography variant="caption" color="gray" mt={3} display="block">
          By clicking, you agree to our{" "}
          <Link style={{ color: "black" }} href="#" underline="hover">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link style={{ color: "black" }} href="#" underline="hover">
            Privacy Policy
          </Link>
          .
        </Typography>
      </Paper>
    </Box>
  );
};

export default Rewardify;
