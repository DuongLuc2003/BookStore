import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const login = createAsyncThunk(
  "auth/login",
  async (userData: any, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUserProductWishlist = createAsyncThunk(
  "user/wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWislist();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addProToCart = createAsyncThunk(
  "user/cart/post",
  async (cartData,thunkAPI) => {
    try {
      return await authService.addtoCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUserCart = createAsyncThunk(
  "user/cart/get",
  async (thunkAPI) => {
    try {
      return await authService.getCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getOrders = createAsyncThunk(
  "user/order/get",
  async (thunkAPI) => {
    try {
      return await authService.getUserOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAllOrders = createAsyncThunk(
  "user/order/get-orders",
  async (thunkAPI) => {
    try {
      return await authService.getOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getOrderByUser = createAsyncThunk(
  "order/get-order",
  async (id, thunkAPI) => {
    try {
      return await authService.getOrder(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteProductCart = createAsyncThunk(
  "user/cart/delete-product",
  async (cartItemId,thunkAPI) => {
    try {
      return await authService.removeProCart(cartItemId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateProductCart = createAsyncThunk(
  "user/cart/update-product",
  async (cartDetail,thunkAPI) => {
    try {
      return await authService.updateProCart(cartDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/profile/edit-user",
  async (data,thunkAPI) => {
    try {
      return await authService.updateUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "user/password/token",
  async (data,thunkAPI) => {
    try {
      return await authService.forgotPassSToken(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "user/password/reset",
  async (data,thunkAPI) => {
    try {
      return await authService.resetPassSToken(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const userDefaultState = {
  _id: null,
  firstname: null,
  lastname: null,
  email: null,
  mobile: null,
  token: null,
};

const initialState = {
  user: getUserfromLocalStorage,
  wishlist:[],
  cart:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          toast.info("Đăng nhập thành công");
        }
      })
      .addCase(login.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.user = null;
        if (state.isError === true) {
          toast.error("Đăng nhập thất bại");
        }
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
          toast.info("Tạo tài khoản thành công");
        }
      })
      .addCase(register.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.user = null;
        if (state.isError === true) {
          toast.error("Tạo tài khoản thất bại");
        }
      })
      .addCase(getUserProductWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProductWishlist.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.wishlist = action.payload;
      })
      .addCase(getUserProductWishlist.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
      })
      .addCase(addProToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProToCart.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cart = action.payload;
        toast.success('Đã thêm sản phẩm vào giỏ hàng')
      })
      .addCase(addProToCart.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cart = action.payload;
      })
      .addCase(getUserCart.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
      })
      .addCase(deleteProductCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductCart.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.deleteCart = action.payload;
        toast.success('Xóa sản phẩm thành công')
      })
      .addCase(deleteProductCart.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
        toast.error('Xóa sản phẩm thất bại')
      })
      .addCase(updateProductCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductCart.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updateCart = action.payload;
        toast.success('Sửa sản phẩm thành công')
      })
      .addCase(updateProductCart.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
        // toast.error('Sửa sản phẩm thất bại')
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.getorderedProduct = action.payload;
      })
      .addCase(getOrders.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.editprofileUser = action.payload;
        toast.success('Cập nhật Profile thành công')
      })
      .addCase(updateUser.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
        toast.error('Cập nhật Profile thất bại')
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.forgotPassword = action.payload;
        toast.success('Đã gửi email')
      })
      .addCase(forgotPassword.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
        toast.error('Gửi email thất bại')
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state: any, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.resetingPassword = action.payload;
        toast.success('Đổi mật khẩu thành công')
      })
      .addCase(resetPassword.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
        toast.error('Đổi mật khẩu thất bại')
      })
      .addCase(getOrderByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderByUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.orderbyuser = action.payload;
        state.message = "success";
      })
      .addCase(getOrderByUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getAllOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.allorders = action.payload;
        state.message = "success";
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
