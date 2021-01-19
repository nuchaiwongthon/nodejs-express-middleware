const { decode_tokens } = require('../constants/utility-function');
module.exports = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const decode = await decode_tokens(req.headers.authorization).catch(e => {
                throw e;
            });
                next();
        } else {
            res.send({
                status: 401,
                message: `Not found is token.`
            });
        }
    } catch (error) {
        console.error(error);
        res.send({
            status: 402,
            message: `Token is expired.`
        });
    }
};
