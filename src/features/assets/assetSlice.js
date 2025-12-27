import { createSlice } from "@reduxjs/toolkit";

const assetSlice = createSlice({
  name: "assets",
  initialState: { list: [] },
  reducers: {
    uploadAsset: (state, action) => {
      state.list.push({
        id: Date.now(),
        file: action.payload.file,
        username: action.payload.username,
        status: "Pending",
      });
    },
    approveAsset: (state, action) => {
      const asset = state.list.find(a => a.id === action.payload);
      if (asset) asset.status = "Approved";
    },
    rejectAsset: (state, action) => {
      const asset = state.list.find(a => a.id === action.payload);
      if (asset) asset.status = "Rejected";
    },
  },
});

export const { uploadAsset, approveAsset, rejectAsset } = assetSlice.actions;
export default assetSlice.reducer;
