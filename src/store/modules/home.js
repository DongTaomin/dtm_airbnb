import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  async (params, { dispatch }) => {
    const res = await getHomeGoodPriceData();
    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeDataAction.pending, (state) => {})
      .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        console.log(1);
        console.log(payload);
        state.goodPriceInfo = payload; // 更新 banner 数据
      })
      .addCase(fetchHomeDataAction.rejected, (state, action) => {
        state.error = action.error.message; // 保存错误信息
      });
  },
});
export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
