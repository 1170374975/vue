// 专门处理登录信息
function isLogin() {
    // 看cookie里有没有login=true
    return document.cookie.includes('login=true');
}

function login () { //登录
    const expiresDay = 147; //设置cookie的存放天数
    const date = new Date(); //当前日期的ms数
    date.setTime(date.getTime() + expiresDay * 24 * 60 * 60 * 1000);
    // date.toGMTString()  GMT格式的日期
    document.cookie = `login=true;expires=${date.toGMTString()}`;
}
// 取消登录
function cancelLogin () {
    const date = new Date();
    date.setTime(date.getTime() - 1000000000);
    document.cookie = `login=true;expires=${date.toGMTString()}`;
}

export default {
    isLogin,
    login,
    cancelLogin,
}