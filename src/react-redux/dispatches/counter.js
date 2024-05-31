import { decrement, increment } from "../actions";

const counterDispatch = (dispatch) => ({
  increment: () => dispatch(increment),
  decrement: () => dispatch(decrement),
});
export default counterDispatch;
