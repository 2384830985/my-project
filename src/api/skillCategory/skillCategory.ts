import request from '@/plugin/axios'

export const manageSkillCategoryList:Function = (data:Object={})=>{
    return request({
        url: '/manage/skillCategory/list',
        method: 'post',
        data: data,
    })
}
