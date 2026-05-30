export const logApi = (req, res, next) => {
  console.log(`[API] ${req.method} ${req.originalUrl}`);
  next();
};
