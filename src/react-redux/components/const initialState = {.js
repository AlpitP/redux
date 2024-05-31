// const initialState = {
//   count: 0,
// };
// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       state.count += 1;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPostById.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchPostById.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.post.push(action.payload.data);
//       })
//       .addCase(fetchPostById.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error?.message || "error";
//       });
//   },
// });
// export const { increment } = counterSlice.actions;
// export default counterSlice.reducer;

// const store = configureStore({
//   reducer: counterReducer,
// });
