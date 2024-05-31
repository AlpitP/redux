import React from "react";
import {
  useGetApiDataQuery,
  usePostDataMutation,
} from "../slices/fetchDataSlice";

const DemoFetchData = () => {
  // const data = useSelector((state) => state.data);
  // const { users, status, error } = data;
  const fetch = useGetApiDataQuery("users");
  // const fetchById = useGetApiDataByIdQuery({ name: "users", id: 1 });
  const [postData] = usePostDataMutation();
  // const dispatch = useDispatch();

  const postHandler = async () => {
    await postData({ name: "users", obj: { name: "Alpit" } });
  };
  return (
    <>
      <br />
      <h3>CreateAsyncThunk</h3>
      <button onClick={postHandler}>Post Data</button>
      {fetch.isLoading ? <h1>Loading..</h1> : <h1>{fetch.data[0]?.name}</h1>}
      {/* <button onClick={() => dispatch(fetchUsers())}>Fetch data</button>
      {status ? (
        <h4>Loading..</h4>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        users?.map((ele, index) => {
          return <li key={index}> {ele?.name}</li>;
        })
      )} */}
    </>
  );
};

export default DemoFetchData;
