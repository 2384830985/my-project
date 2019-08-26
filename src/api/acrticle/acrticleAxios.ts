import request from '@/plugin/axios'

export const manageArticleList:Function = (data:Object={})=>{
    return request({
        url: '/manage/article/list',
        method: 'post',
        data: data,
    })
}

export const manageArticleUpdateSave:Function = (data:Object={})=>{
    return request({
        url: '/manage/article/updateSave',
        method: 'post',
        data: data,
    })
}

export const manageArticleDelete:Function = (data:string)=>{
    return request({
        url: `/manage/article/delete?articleId=${data}`,
        method: 'get',
        success: {
            type: 'notice',
            state: 'success',
            options: {
                title: '删除成功',
            }
        }
    })
}

export const manageArticleDetail:Function = (data:string)=>{
    return request({
        url: `/manage/article/detail?articleId=${data}`,
        method: 'get',
    })
}
