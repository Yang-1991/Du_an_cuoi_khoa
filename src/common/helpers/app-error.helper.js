export const appError = (error, req, res, next) => {
  console.error("[ERROR]", error);

  res.status(error.statusCode || 500).json({
    status: "error",
    message: error.message || "Internal Server Error"
  });
};
