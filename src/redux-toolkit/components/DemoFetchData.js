import React from "react";
import {
  useGetApiDataQuery,
  usePostDataMutation,
} from "../slices/fetchDataSlice";
import propTypes from "prop-types";

const DemoFetchData = ({ name }) => {
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
      <h1>{name}</h1>
      <h3>CreateAsyncThunk</h3>
      <button onClick={postHandler}>Post Data</button>
      {fetch.isLoading ? (
        <h1>Loading..</h1>
      ) : (
        fetch.data.map((ele, index) => <li key={index}>{ele.name}</li>)
      )}
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
DemoFetchData.propTypes = {
  name: propTypes.string,
};

export default DemoFetchData;
