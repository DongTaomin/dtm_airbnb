import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
} from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  async (params, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    plusInfo: {},
    longForInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeDataAction.pending, (state) => {})
      .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        console.log(1);
        console.log(payload);
        // state.goodPriceInfo = payload; // 更新 banner 数据
      })
      .addCase(fetchHomeDataAction.rejected, (state, action) => {
        state.error = action.error.message; // 保存错误信息
      });
  },
});
export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
