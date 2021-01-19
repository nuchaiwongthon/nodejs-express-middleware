const { generated_tokens } = require('../constants/utility-function');
module.exports.validate = async (request, response) => {
    response.send({
        message: 'Hello',
    });
};
module.exports.signIn = async (request, response) => {
    // try {
    //     const token = await generated_tokens(request.body);
    //     response.send({
    //         status: 200,
    //         message: `Sign In is successful.`,
    //         accessToken: token
    //     });
    // } catch (error) {
    //     response.send({
    //         status: 400,
    //         message: `Sign In is failed.`
    //     });
    // }
};
