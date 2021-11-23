const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const user = require('../../models').user;

require('dotenv').config()

const generateToken = (SystemId, userUUID) => {
    const token = jwt.sign(
        { SystemId, userUUID },
        process.env.JWT_SECRET,
        { expiresIn: parseInt(process.env.TOKEN_EXPIRE) }
    );
    return token;
}

module.exports = {
    async createAlumn(req, res) {
        const { name, surname, email, password } = req.body
        const userAlreadyExists = await user.findOne({ where: { email } })
        if (userAlreadyExists) {
            return res.status(400).json({ done: false, message: "" })
        }
        const User = await user.create({ names: name, surnames: surname, email: email, password: password })
        const jwt = generateToken(User.id, User.alumnId)
        return res.status(200).json({ done: true, jwt: jwt })
    },

    async authenticate(req, res) {
        const { userId, password } = req.body
        let response = await user.findOne({
            where: { email: userId }
        })

        if (!response) {
            return res.status(400).json({ done: false, mesasge: "" })
        }

        const isMatch = await user.validatePassword(password, response.password)
        if (!isMatch) return res.status(400).json({ done: false, message })

        const jwt = generateToken(response.id, response.alumnId)
        res.json({ done: true, message: "", token: jwt, data: { UserId: response.id, UserCode: response.alumnId } })
    },


}