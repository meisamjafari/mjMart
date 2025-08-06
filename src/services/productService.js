import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1";

export const getProducts = async () => {
  const res = await axios.get(`${API_URL}/products`);

  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${API_URL}/products/${id}`);

  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get(`${API_URL}/categories`);

  return res.data;
};

export const getProductsByCategory =async (categoryId) => {
  const res =await axios.get(`${API_URL}/categories/${categoryId}/products`);

  return res.data;
};
