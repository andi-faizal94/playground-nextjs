import { api } from './api';

const getAllPost = async (options) => {
  try {
    const response = await api.get('/posts', options);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
export const allpost = {
  getAllPost,
};
