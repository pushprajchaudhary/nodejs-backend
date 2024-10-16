const asyncHandler = (requestHandler) => {
return (req, res, next) => {
    return Promise.resolve(requestHandler(res, req, next)).catch(err => next(err));
}
}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }