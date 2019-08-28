import Article from "@/method/article.method";

const statusFilter:Function = (value:string|number)=>{
    let title = '-';
    if (!value) return title;
    Article.statusList.map((item:methodType)=>{
        if (item.value===value) {
            title = item.title;
        }
    })
    return title;
}

export default {
    statusFilter
}
