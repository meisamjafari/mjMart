import axios from "axios";

export const registerUser = async (name, email, password) => {
  const response = await axios.post("https://api.escuelajs.co/api/v1/users/", {
    name,
    email,
    password,
    avatar: "https://api.lorem.space/image/face?w=150&h=150",
  });
  return response.data;
};
