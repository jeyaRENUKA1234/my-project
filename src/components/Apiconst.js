import Axios from "axios";

export const GENERATE_OTP_API = `${process.env.REACT_APP_API_URL}/v1/store-user/auth/generate-otp`;
export function generateApi(dialCode, contactNo) {
  return Axios.post(GENERATE_OTP_API, {
    dialCode,
    contactNo,
  });
}

export const DIGIT_OTP_LOGIN_API = `${process.env.REACT_APP_API_URL}/v1/store-user/auth/login`;
export function loginDigitApi(dialCode, contactNo) {
  const deviceDetails = {
    device: "Nexus Phone",
    app: "web",
    device_type: 2,
    os: "unknown",
    ip_address: "103.28.246.86",
    browser: "Chrome",
  };
  return Axios.post(
    DIGIT_OTP_LOGIN_API,
    {
      dialCode,
      contactNo,
    },
    {
      headers: {
        "Content-Type": "application/json",
        device: JSON.stringify(deviceDetails),
      },
    }
  );
}
// Store List
export const STORE_LIST_API = `${process.env.REACT_APP_API_URL}/v1/store-user/store`;
export function storeListApi() {
  const deviceDetails = {
    device: "Nexus Phone",
    app: "web",
    device_type: 2,
    os: "unknown",
    ip_address: "103.28.246.86",
    browser: "Chrome",
  };
  const LoginToken = localStorage.getItem("Logintoken");
  return Axios.get(STORE_LIST_API, {
    headers: {
      authorization: "Bearer" + " " + LoginToken,
      "Content-Type": "application/json",
      device: JSON.stringify(deviceDetails),
    },
  });
}
