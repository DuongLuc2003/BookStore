let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const getAccessToken = (): string | null => {
  return accessToken;
};

export const getApiHeaders = () => {
  const token = getAccessToken();
  return {
    'Authorization': token ? `Bearer ${token}` : '',
    'Accept': 'application/json',
  };
};

// Thêm hàm này để tự động cập nhật token sau khi đăng nhập
export const updateAccessToken = (data: { token: string }) => {
  setAccessToken(data.token);
};
