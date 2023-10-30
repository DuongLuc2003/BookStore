import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiHeaders } from '../utils/apiConfig';
interface IUploadedImages {
  images: File;
  // Các trường dữ liệu khác mà bạn nhận được từ API khi tải lên hình ảnh
}
const uploadApi = createApi({
  reducerPath: 'upload',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api', // Điều này cần phải được cập nhật đúng với địa chỉ API của bạn
    fetchFn: async (url, options) => {
      if (options) {
        options.headers = getApiHeaders();
      }
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
  }),
  endpoints: (builder) => ({
    addImages: builder.mutation<IUploadedImages, FormData>({
      query: (images) => ({
        url: '/upload', // Địa chỉ endpoint tải lên hình ảnh
        method: 'POST',
        body: images,
      }),
    }),
    deleteImage: builder.mutation<void, number>({
      query: (id) => ({
        url: `/upload/delete-img/${id}`, // Địa chỉ endpoint xóa hình ảnh
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useAddImagesMutation, useDeleteImageMutation } = uploadApi;
export default uploadApi;
