const cache = require('../config/cache');
const jwt = require('jsonwebtoken');

module.exports.verifyAuthToken = (tokenType) => {
    return async (req, res, next) => {
        const rawToken = req.headers[process.env[`JWT_${tokenType.toUpperCase()}_HEADER`]];

        if (!rawToken)
            return res.status(401).json({
                message: 'Authorization token not present in headers',
            });

        const blacklistedToken = await cache.get(`jwtoken-${rawToken}`);
        if (blacklistedToken)
            return res.status(401).json({
                message: 'Invalid authorization token',
            });

        try {
            const verifiedToken = await jwt.verify(rawToken, process.env[`JWT_${tokenType.toUpperCase()}_KEY`]);

            if (verifiedToken.type !== tokenType)
                return res.status(401).json({
                    message: 'Invalid authorization token',
                });

            req[`${tokenType}Token`] = verifiedToken;
            next();
        } catch (e) {
            return res.status(401).json({ message: e.message });
        }
    };
};
