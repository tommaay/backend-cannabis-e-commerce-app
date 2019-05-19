module.exports = function errorHandler(err, req, res, next) {
    console.log('err');
    switch (err.code) {
        case 400:
            return res.status(400).json({
                error: err,
                message: 'There was a problem with your request.',
            });

        case 401:
            return res.status(401).json({
                error: err,
                message: 'You are unathorized to view the content.',
            });

        case 404:
            return res.status(404).json({
                error: err,
                message: 'The requested content does not exist.',
            });

        default:
            return res.status(500).json({
                error: err,
                message: 'There was an error performing the required operation',
            });
    }
};
