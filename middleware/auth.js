const { User } = require("../models/User");

const { User } = require('../models/User')

let auth =(req,res,next) => {
    //인증 처리를 하는 곳

    //클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;
    //토큰을 복호화 한 후 유저를 찾는다.
    User.findByToken()
    //유저가 있으면 인증 0

    // 유저가 없으면 인증 x

}

module.exports = {auth};