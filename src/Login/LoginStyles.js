export const backgroundStyle = {
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
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "brightness(20%)",
    zIndex: -1,
  },
};

export const cardStyle = {
  p: 4,
  borderRadius: 3,
  maxWidth: 350,
  textAlign: "center",
  backgroundColor: "#fff",
};

export const buttonStyle = {
  backgroundColor: "#668D12",
  color: "#fff",
  mt: 3,
  textTransform: "none",
};

export const outlinedButtonStyle = {
  color: "#668D12",
  borderColor: "#ACC43F",
  mt: 2,
  textTransform: "none",
};
