import { Component, Vue } from 'vue-property-decorator';
import TContent from "@/t-components/t-content/index.vue";
import TTitle from "@/t-components/t-content-title/index.vue";
import TContentCon from "@/t-components/t-content-con/index.vue";
import { manageSkillCategoryList } from "@/api/skillCategory/skillCategory";
import { manageArticleUpdateSave,manageArticleDetail } from "@/api/acrticle/acrticleAxios";
import Setting from '../../setting'
@Component({
    components: {TContentCon, TTitle, TContent},
})
export default class articleList extends Vue {

    private formItem:any = {
        good: 0,
        see: 0,
        content: "",
        image: "",
    }
    public action:string = Setting.imgUrl;
    public toolbars:any =  {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        /* 1.4.2 */
        navigation: true // 导航目录
    }

    private defaultFileList:Array<any> = [];

    private ruleInline:object = {
    }

    private skillCategoryList:any= {
    }

    created(){
        this.start();
    }
    async start(){
        console.log(this.$route.query.id)
        await manageSkillCategoryList().then((res:any)=>{
            this.skillCategoryList = res.data.list;
        })
        if (this.$route.query.id) {
            manageArticleDetail(this.$route.query.id)
                .then((res:any)=>{
                    this.formItem = res.data;
                    this.defaultFileList = [
                        {
                            name: '1',
                            url: this.formItem.image
                        }
                    ]
                })
        }
    }

    handleBeforeUpload () {
        let check = true;
        if (this.formItem.image !== '') {
            check = false;
            this.$Notice.warning({
                title: 'Up to five pictures can be uploaded.'
            });
        }
        return check;
    }
    removeImg(){
        this.formItem.image = '';
    }

    submit(){
        manageArticleUpdateSave(this.formItem).then((res:any)=>{
            console.log(res)
            this.cleans()
        })
    }

    onSuccessImg(file:any){
        this.formItem.image = file.data.url;
    }

    cleans(){
        this.$router.push("/article/list");
    }
}
