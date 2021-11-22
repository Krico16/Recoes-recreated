const responseModel = require('../../models').responses

module.exports = {
    async submitResponse(req, res) {
        const { idQuestion, responseId } = req.body
        const { SystemId } = req.user

        const data = await responseModel.create({ idAlumb: SystemId, idQuestion: idQuestion, idResponse: responseId })
        return res.status(200).json({ done: true, message: "" })
    }
}