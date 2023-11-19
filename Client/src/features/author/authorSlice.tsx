import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import authorService from "./authorService";

export const getAllAuthor = createAsyncThunk(
  "author/get-authors",
  async (thunkAPI:any) => {
    try {
      return await authorService.getAuthors();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createAuthor = createAsyncThunk(
  "author/create-author",
  async (authorData, thunkAPI) => {
    try {
      return await authorService.createAuthor(authorData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAuthor = createAsyncThunk(
  "author/update-author",
  async (author, thunkAPI) => {
    try {
      return await authorService.updateAuthor(author);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAuthor = createAsyncThunk(
  "productCategory/delete-category",
  async (id, thunkAPI) => {
    try {
      return await authorService.deleteAuthor(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("RevertAll");
const initialState = {
  authors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const pcategorieSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAuthor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.authors = action.payload;
      })
      .addCase(getAllAuthor.rejected, (state:any, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createAuthor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdAuthor = action.payload;
      })
      .addCase(createAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAuthor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedAuthor = action.payload;
      })
      .addCase(updateAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAuthor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedAuthor = action.payload;
      })
      .addCase(deleteAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default pcategorieSlice.reducer;
