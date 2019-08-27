import request from '@/plugin/axios'

export const login:Function = (data:Object)=>{
    return request({
        url: '/manage/user/login',
        method: 'post',
        data: data,
        NoCookie: true
    })
}
