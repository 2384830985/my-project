import { Component, Vue } from 'vue-property-decorator';
import TContent from "@/t-components/t-content/index.vue";
import TTitle from "@/t-components/t-content-title/index.vue";
import TContentCon from "@/t-components/t-content-con/index.vue";
import TPage from "@/page/page.vue";
import { manageSkillCategoryList,manageSkillCategoryUpdateDelete } from "@/api/skillCategory/skillCategory";
import Utils from "@/util/utils";
@Component({
    components: {TContentCon, TTitle, TContent,TPage},
})
export default class articleList extends Vue {
    public columns:Array<tableForm> = [
        {
            title: '文章类目id',
            key: 'id',
        },
        {
            title: '文章类目名称',
            key: 'name',
        },
        {
            title: '文章状态',
            key: 'status',
            render: (h:Function, params:any) => {
                return h('div',params.row.status===1?'开启':'关闭')
            }
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
            width: 150,
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
        manageSkillCategoryList(page).then((res:any)=>{
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
        this.$router.push(`/articleCategory/add?id=${row.id}`)
    }

    /**
     * 删除文章
     * @param row
     */
    public remove(row:any){
        console.log(row)
        manageSkillCategoryUpdateDelete(row.id)
            .then((res:any)=>{
                this.start();
            })
    }

    changePage (row:number) {
        this.page.pageNum = row;
        this.start();
    }
}
