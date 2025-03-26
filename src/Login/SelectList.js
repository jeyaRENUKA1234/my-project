import React, { useState, useEffect } from "react";
import {
  IconButton,
  Paper,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import bgImage from "../assets/background.png";
import Axios from "axios";
import { STORE_LIST_API } from "../components/Apiconst";
import { useNavigate } from "react-router-dom";

const SelectList = () => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const deviceDetails = {
          device: "Nexus Phone",
          app: "web",
          device_type: 2,
          os: "unknown",
          ip_address: "103.28.246.86",
          browser: "Chrome",
        };
        const LoginToken = localStorage.getItem("Logintoken");
        const response = await Axios.get(STORE_LIST_API, {
          headers: {
            authorization: "Bearer" + " " + LoginToken,
            "Content-Type": "application/json",
            device: JSON.stringify(deviceDetails),
          },
        });

        setStores(response?.data);
        setSelectedStore(response.data.stores[0]?.storeId || null);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const handleContinue = () => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };
  const handleLoginContinue = () => {
    setTimeout(() => {
      navigate("/not_available_store");
    }, 1000);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }
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
          maxWidth: 400,
          textAlign: "center",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        {stores !== null ? (
          <IconButton
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              zIndex: 10,
            }}
            onClick={handleLoginContinue}
          >
            <ArrowBackIcon />
          </IconButton>
        ) : (
          " "
        )}
        {/* Back Arrow */}

        {/* Title */}
        <Typography variant="h5" fontWeight="bold" mt={3}>
          Select Your Store
        </Typography>
        <Typography variant="body2" color="gray" mt={1}>
          Your Number is connected stores
        </Typography>

        {/* Store Selection */}
        <RadioGroup
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
        >
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              mt: 2,
              borderRadius: 2,
              border: "1px solid #ddd",
            }}
          >
            {/* Mapping store images correctly */}
            <Box sx={{ display: "flex", gap: 2 }}>
              {stores?.images?.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${stores.name} - ${index + 1}`}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    marginRight: "20px",
                  }}
                />
              ))}
            </Box>

            <Box sx={{ flex: 1, textAlign: "left" }}>
              <Typography fontWeight="bold">{stores.name}</Typography>
              <Typography variant="body2" color="gray">
                {stores?.address?.line1},{stores?.address?.state}
              </Typography>
              <Typography variant="body2" color="gray">
                Store ID: {stores.storeId}
              </Typography>
            </Box>

            <FormControlLabel
              sx={{ marginLeft: 3 }}
              value={stores.storeId}
              control={<Radio />}
              label=""
            />
          </Paper>
        </RadioGroup>

        {/* Continue Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleContinue}
          sx={{
            backgroundColor: "#86B817",
            color: "#fff",
            mt: 3,
            fontWeight: "bold",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#6F9E12",
            },
          }}
        >
          Continue
        </Button>
      </Paper>
    </Box>
  );
};

export default SelectList;
