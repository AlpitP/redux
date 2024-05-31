import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
  users: [],
  status: false,
  error: "",
};
export const fetchUsers = createAsyncThunk(
  "fetchDataSlice/fetchUsers",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res;
  },
  {
    condition: (url = undefined, { getState }) => {
      if (getState().data.status === false) {
        return true;
      }
    },
  }
);

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const fetchApi = createApi({
  reducerPath: "fetchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getApiData: builder.query({
      query: (name) => `${name}`,
    }),
    getApiDataById: builder.query({
      query: ({ name, id }) => `${name}?id=${id}`,
    }),
    postData: builder.mutation({
      query: ({ name, obj }) => ({
        url: `${name}`,
        method: "POST",
        body: obj,
      }),
    }),
  }),
});

export const {
  useGetApiDataQuery,
  useGetApiDataByIdQuery,
  usePostDataMutation,
} = fetchApi;
export const { useGetPokemonByNameQuery } = pokemonApi;

export const fetchDataSlice = createSlice({
  name: "fetch",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        console.log(action);
        state.status = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log(action);
        state.status = false;
        state.users = action.payload.data;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(action);
        state.status = false;
        state.error = action.error.message;
      });
  },
});
export default fetchDataSlice.reducer;
