export const request = ACTION => ({
  type: ACTION.request(),
});
export const success = (ACTION, data) => ({
  type: ACTION.success(),
  payload: data,
});
export const error = (ACTION, err) => ({
  type: ACTION.error(),
  payload: err,
});
