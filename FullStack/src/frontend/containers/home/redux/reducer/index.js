import { USER_LOGIN } from "../actions/actionTypes";

const initialState = {
  user: {},
  error: "",
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN.request(): {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_LOGIN.success(): {
      const {
        payload: {
          data: { response },
        },
      } = action;

      return {
        ...state,
        user: response[0],
        loading: false,
      };
    }
    case USER_LOGIN.error(): {
      const {
        payload: {
          data: { response },
        },
      } = action;
      return {
        ...state,
        error: response[0],
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default userReducer;
