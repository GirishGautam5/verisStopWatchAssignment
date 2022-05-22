import {
  DATA_LIST_FAILURE,
  DATA_LIST_REQUEST,
  DATA_LIST_SUCCESS,
} from "../constants/timerConstants";

export const dataReducer = (state = { loading: true, appData: [] }, action) => {
  switch (action.type) {
    case DATA_LIST_REQUEST:
      return { loading: true };
    case DATA_LIST_SUCCESS:
      return {
        loading: false,
        appData: action.payload,
      };
    case DATA_LIST_FAILURE:
      return {
        loading: false,
        appData: action.payload,
      };
    default:
      return state;
  }
};
