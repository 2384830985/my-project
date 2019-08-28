import request from '@/plugin/axios'

export const manageSkillCategoryList:Function = (data:Object={})=>{
    return request({
        url: '/manage/skillCategory/list',
        method: 'post',
        data: data,
    })
}

export const manageSkillCategoryUpdateServe:Function = (data:Object={})=>{
    return request({
        url: '/manage/skillCategory/updateServe',
        method: 'post',
        data: data,
        success: {
            type: 'message',
            state: 'success',
            options: {
                content: '操作成功',
            }
        }
    })
}

export const manageSkillCategoryUpdateDelete:Function = (data:string)=>{
    return request({
        url: `/manage/skillCategory/delete?skillCategoryId=${data}`,
        method: 'get',
        success: {
            type: 'message',
            state: 'success',
            options: {
                content: '删除成功',
            }
        }
    })
}

export const manageSkillCategoryUpdateDetail:Function = (data:string)=>{
    return request({
        url: `/manage/skillCategory/detail?skillCategoryId=${data}`,
        method: 'get',
    })
}
