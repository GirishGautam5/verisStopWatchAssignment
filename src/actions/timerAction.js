import {
  DATA_LIST_FAILURE,
  DATA_LIST_REQUEST,
  DATA_LIST_SUCCESS,
} from "../constants/timerConstants";
import data from "../data";

export const dataList = () => async (dispatch) => {
  dispatch({
    type: DATA_LIST_REQUEST,
  });
  try {
    dispatch({
      type: DATA_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATA_LIST_FAILURE,
      payload: error.message,
    });
  }
};
