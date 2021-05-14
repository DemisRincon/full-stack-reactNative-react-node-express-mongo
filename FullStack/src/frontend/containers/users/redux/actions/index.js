import { error, request, success } from "lib/redux/baseActions";

import { $api } from "config";
import { USER_LOGIN } from "./actionTypes";
import axios from "axios";
import { redirectTo } from "../../../../../library/methods";

export const doLogin = (data) => async (dispatch) => {
  const action = USER_LOGIN;
  dispatch(request(action));
  const response = await axios({
    method: "post",
    url: $api().internal + process.env.URL_LOGIN,
    data,
  })
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      return err.response;
    });

  if (response.status === 200) {
    dispatch(success(action, response));
    redirectTo();
    return response;
  } else {
    dispatch(error(action, response));
    return response;
  }
};
