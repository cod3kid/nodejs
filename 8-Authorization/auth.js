const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) {
        return res.send("No Token Found")
    }

    try {
        const decoded = jwt.verify(token, 'dummyTokenSecret')
        req.user = decoded
        next()
    } catch (err) {
        return res.send("Invalid Token")
    }
}

module.exports = auth