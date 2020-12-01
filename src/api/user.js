import request from '@/utils/request';
export default {
    poshLogin(username,password) {
        return request({
            url: `/login`,
            method: 'post',
            data:{
                username,
                password
            }
        })
    },
    tclogin(){
        return request({
            url:`/logout`,
            method:"post",
        })
    }
}