import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/machines`;

// Định nghĩa kiểu dữ liệu cho máy
export interface Machine { // Thêm từ khóa export
  id?: string;
  name: string;
  description?: string;
  state?: "operating" | "maintenance" | "error"; // Thêm thuộc tính state nếu cần
  [key: string]: any; // Nếu có thêm các thuộc tính khác
}

/**
 * Lấy danh sách tất cả thiết bị
 * @returns {Promise<Machine[]>} Promise chứa danh sách thiết bị
 */
export const getAllMachines = async (): Promise<Machine[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error("Error fetching machines:", error);
    throw error; // Ném lỗi để xử lý ở component
  }
};

/**
 * Thêm thiết bị mới
 * @param {FormData} machineData Dữ liệu thiết bị (bao gồm file nếu có)
 * @returns {Promise<Machine>} Promise chứa thông tin thiết bị vừa được tạo
 */
export const createMachine = async (machineData: FormData): Promise<Machine> => {
  try {
    const response = await axios.post(API_URL, machineData, {
      headers: {
        "Content-Type": "multipart/form-data", // Đảm bảo gửi dữ liệu dạng form-data
      },
    });
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error("Error creating machine:", error);
    throw error; // Ném lỗi để xử lý ở component
  }
};

/**
 * Cập nhật thông tin thiết bị
 * @param {string} id ID của thiết bị cần cập nhật
 * @param {Partial<Machine>} machineData Dữ liệu cập nhật thiết bị
 * @returns {Promise<Machine>} Promise chứa thông tin thiết bị vừa được cập nhật
 */
export const updateMachine = async (
  id: string,
  machineData: Partial<Machine>
): Promise<Machine> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, machineData);
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error("Error updating machine:", error);
    throw error; // Ném lỗi để xử lý ở component
  }
};

/**
 * Xóa thiết bị
 * @param {string} id ID của thiết bị cần xóa
 * @returns {Promise<void>} Promise chứa thông tin phản hồi từ API
 */
export const deleteMachine = async (id: string): Promise<void> => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error("Error deleting machine:", error);
    throw error; // Ném lỗi để xử lý ở component
  }
};