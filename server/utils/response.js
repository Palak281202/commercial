const success = (statusCode, result) => {
  return {
    status: "ok",
    statusCode,
    result,
  };
};

const error = (statusCode, result) => {
  return {
    status: "error",
    statusCode,
    result,
  };
};

export { success, error };
