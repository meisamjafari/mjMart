import axios from "axios";

export const loginUser = async (email, password) => {
  const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
    email,
    password,
  });
  return res.data;
};
