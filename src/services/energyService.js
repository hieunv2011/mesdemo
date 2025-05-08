import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/energy`;

/**
 * Lấy danh sách tất cả nhật ký năng lượng
 * @returns {Promise} Promise chứa danh sách nhật ký năng lượng
 */
export const getAllEnergyLogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error("Error fetching energy logs:", error);
    throw error; // Ném lỗi để xử lý ở component
  }
};