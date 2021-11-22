const optionModel = require('../../models').option

module.exports = {
    async createOption(req, res) {
        const { idQuestion, optionDesc, icon } = req.body
        const data = await optionModel.create({
            idQuestion: idQuestion,
            description: optionDesc,
            icon: icon
        })

        return res.status(200).json({ done: true, message: "" })
    },

    async getOptionByQuestionId(req, res) {
        const { id } = req.params
        const data = await optionModel.findAll({ where: { idQuestion: id } })
        return res.status(200).json({ done: true, data: data })
    }
}