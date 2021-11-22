const questionModel = require('../../models').question

module.exports = {
    async createQuestion(req, res) {
        const { question, isSingle } = req.body

        const data = await questionModel.create({ description: question, type: isSingle ? 'SINGLE' : 'MULTI' })
        return res.status(200).json({ done: true, message: "" })
    },
    async getAllQuestions(_, res) {
        const data = await questionModel.findAll({});
        return res.status(200).json({ done: true, data: data })
    },
    async getQuestion(req, res) {
        const { id } = req.params
        const data = await questionModel.findOne({ where: { id: id } })
        return res.status(200).json({ done: true, data: data })
    }
}
