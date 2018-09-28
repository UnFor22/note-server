const {Router} = require('express')
const router = Router()
const userModel = require('../model/user')

router.post('/user', async (req, res, next) => {
    try {
        const {username, password, eamil} = req.body
        const data = await userModel.create({username, password, eamil})
        console.log(data)
        res.json({
            code:200,
            msg: "注册成功"
        })
    } catch(err) {
        res.json({
            code: 400,
            msg: "缺少必要参数",
            err
        })
    }
})
module.exports = router