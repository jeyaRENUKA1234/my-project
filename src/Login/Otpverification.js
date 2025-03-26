import React, { useState } from "react";
import { Box, Paper, Typography, Button, TextField, Link } from "@mui/material";
import Logo from "../assets/Frame.png";
import bgImage from "../assets/background.png";
import Axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { DIGIT_OTP_LOGIN_API, GENERATE_OTP_API } from "../components/Apiconst";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { dialCode, contactNo } = location.state || {};
  const navigate = useNavigate();
  const [resending, setResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  console.log("timer", resendTimer);

  // Otp Verification
  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  // Otp Login API
  const handleVerifyOTP = async () => {
    const enteredOTP = otp.join("");
    if (enteredOTP.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP.", {
        position: "top-right",
      });
      return;
    }
    setLoading(true);
    try {
      const deviceDetails = {
        device: "Nexus Phone",
        app: "web",
        device_type: 2,
        os: "unknown",
        ip_address: "103.28.246.86",
        browser: "Chrome",
      };
      const response = await Axios.post(
        DIGIT_OTP_LOGIN_API,
        {
          dialCode,
          contactNo,
          type: 1,
          otp: Number(enteredOTP),
        },
        {
          headers: {
            "Content-Type": "application/json",
            device: JSON.stringify(deviceDetails),
          },
        }
      );
      console.log("apiresponse", response);
      localStorage.setItem("Login_refresh_Token", response?.data?.refreshToken);
      localStorage.setItem("Logintoken", response?.data?.token);
      toast.success("OTP Verification Successful. Please continue.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      setTimeout(() => {
        navigate("/select_store");
      }, 1000);
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
  // resend OTP API
  const handleResendOTP = async () => {
    if (resending || resendTimer > 0) return;
    setResending(true);
    setResendTimer(60);
    try {
      const response = await Axios.post(GENERATE_OTP_API, {
        dialCode: 91,
        contactNo,
      });
      toast.success(response.data?.message || "OTP resent successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      const countdown = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to resend OTP!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } finally {
      setResending(false);
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
          maxWidth: 350,
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
          Verify your details
        </Typography>
        <Typography variant="body1" color="gray" mt={1}>
          Enter OTP number below
        </Typography>

        {/* OTP Input Fields */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              id={`otp-input-${index}`}
              variant="outlined"
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "25px",
                  height: "15px",
                },
              }}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </Box>

        {/* Verify Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: otp.includes("") ? "#D3D3D3" : "#668D12",
            color: "#fff",
            mt: 5,
            textTransform: "none",
            "&:disabled": { backgroundColor: "#D3D3D3" },
          }}
          disabled={otp.includes("") || loading}
          onClick={handleVerifyOTP}
        >
          {loading ? "Verifying..." : "Verify and Continue"}
        </Button>

        {/* Resend OTP */}
        <Typography variant="caption" color="gray" mt={3} display="block">
          Didn't receive OTP?{" "}
          <Link
            href="#"
            underline="hover"
            color="black"
            fontWeight="bold"
            onClick={handleResendOTP}
            style={{
              cursor: resending || resendTimer > 0 ? "not-allowed" : "pointer",
              opacity: resending || resendTimer > 0 ? 0.5 : 1,
            }}
          >
            {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend"}
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default OTPVerification;
