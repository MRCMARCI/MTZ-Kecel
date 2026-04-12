import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const apiService = {
  // Get all product categories
  getCategories: async () => {
    try {
      const response = await axios.get(`${API}/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  // Get a single category by ID
  getCategory: async (id) => {
    try {
      const response = await axios.get(`${API}/categories/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching category ${id}:`, error);
      throw error;
    }
  },

  // Get company information
  getCompanyInfo: async () => {
    try {
      const response = await axios.get(`${API}/company-info`);
      return response.data;
    } catch (error) {
      console.error('Error fetching company info:', error);
      throw error;
    }
  },

  // Get contact information
  getContactInfo: async () => {
    try {
      const response = await axios.get(`${API}/contact-info`);
      return response.data;
    } catch (error) {
      console.error('Error fetching contact info:', error);
      throw error;
    }
  }
};
