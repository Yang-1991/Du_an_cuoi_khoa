export const responseSuccess = (data, message = "Success", statusCode = 200) => {
  return {
    status: "success",
    statusCode,
    message,
    data
  };
};
