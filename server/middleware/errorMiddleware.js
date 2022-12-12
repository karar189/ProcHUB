/**
 *
 * @param {Response} req
 * @param {Response} res
 * @param {NextFunction} next
 * @purpose Handle Not Found Route and pass error to errorHandler
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found : ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 *
 * @param {Error} err
 * @param {Response} req
 * @param {Response} res
 * @param {NextFunction} next
 * @purpose Handle all errors
 */
export const errorHandler = (err, req, res) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log(err.message);
  res.json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};
