interface tableForm {
    title: string,
    key?: string,
    filters?: object,
    filterMultiple?: boolean,
    filterMethod?: Function,
    render?: Function,
    align?: string,
    width?: number,
    slot?: string,
}
interface pages {
    total: number,
    current: number,
    pageSize: number,
    pageNum: number,
}
import { Component, Vue } from 'vue-property-decorator';
import TContent from "@/t-components/t-content/index.vue";
import TTitle from "@/t-components/t-content-title/index.vue";
import TContentCon from "@/t-components/t-content-con/index.vue";
import TPage from "@/page/page.vue";
import { manageArticleList,manageArticleDelete } from "@/api/acrticle/acrticleAxios";
import Utils from "@/util/utils";
@Component({
    components: {TContentCon, TTitle, TContent,TPage},
})
export default class articleList extends Vue {
    public columns:Array<tableForm> = [
        {
            title: '文章id',
            key: 'id',
        },
        {
            title: '文章名称',
            key: 'title',
        },
        {
            title: '文章首图',
            key: 'image'
        },
        {
            title: '点赞数',
            key: 'good'
        },
        {
            title: '点击数',
            key: 'see'
        },
        {
            title: '文章分类',
            key: 'categoryId',
            align: 'center'
        },
        {
            title: '创建时间',
            key: 'createTime',
            render: (h:Function, params:any) => {
                return h('div',`${Utils.formatDate(params.row.createTime)}`)
            }
        },
        {
            title: '修改时间',
            key: 'createTime',
            render: (h:Function, params:any) => {
                return h('div',`${Utils.formatDate(params.row.createTime)}`)
            }
        },
        {
            title: 'Action',
            slot: 'action',
            width: 200,
            align: 'center'
        }
    ]
    private data:Array<Object> = [];
    private page:pages = {
        total: 1,
        current: 1,
        pageSize: 10,
        pageNum: 1,
    }
    created(){
        this.start();
    }
    start(){
        let page = {
            pageSize: this.page.pageSize,
            pageNum: this.page.pageNum,
        }
        manageArticleList(page).then((res:any)=>{
            this.page.total = res.data.total;
            this.page.current = res.data.pageNum;
            this.page.pageSize = res.data.pageSize;
            this.data = res.data.list;
        })
    }

    /**
     * 修改文章
     * @param row
     */
    public update(row:any){
        console.log(row)
        this.$router.push(`/article/add?id=${row.id}`)
    }

    /**
     * 删除文章
     * @param row
     */
    public remove(row:any){
        console.log(row)
        manageArticleDelete(row.id)
            .then((res:any)=>{
                this.$Message.success('删除成功');
                this.start();
            })
    }

    changePage (row:number) {
        this.page.pageNum = row;
        this.start();
    }
}
