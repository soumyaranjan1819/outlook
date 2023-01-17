import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
});

const initialState = {
  data: [],
  status: STATUSES.IDLE
};

export const emailsDataSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.data.forEach(
        (obj) => ((obj.readStatus = "unread"), (obj.favourite = false))
      );
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setReadStatus: (state, action) => {
      let index = state.data.findIndex((obj) => obj.id === action.payload.id);
      state.data[index].readStatus = "read";
    },
  },
});

export const { setData, setStatus, setReadStatus } = emailsDataSlice.actions;
export default emailsDataSlice.reducer;

// Thunk

export function fetchEmailsData() {
  return async function (dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const apiResponse = await axios.get(
        "https://flipkart-email-mock.vercel.app/"
      );
      dispatch(setData(apiResponse.data.list));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
