import { createSlice } from "@reduxjs/toolkit";

// SLICES

const employesSlice = createSlice({
  name: "employes",
  initialState: {
    data: [],
  },
  reducers: {
    data: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { data } = employesSlice.actions;

export default employesSlice.reducer;

// ACTIONS

export const setData = (value) => async (dispatch) => {
  dispatch(data(value));
};
