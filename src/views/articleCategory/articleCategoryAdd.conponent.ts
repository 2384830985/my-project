import { Component, Vue } from 'vue-property-decorator';
import TContent from "@/t-components/t-content/index.vue";
import TTitle from "@/t-components/t-content-title/index.vue";
import TContentCon from "@/t-components/t-content-con/index.vue";
import { manageSkillCategoryUpdateServe,manageSkillCategoryUpdateDetail } from "@/api/skillCategory/skillCategory";
import Method from "@/method"
import Filters from "@/filters/article.filter"
@Component({
    components: {TContentCon, TTitle, TContent},
    filters:{
        statusFilter: Filters.statusFilter
    }
})
export default class articleCategoryAdd extends Vue {

    private statusList:Array<methodType> = Method.Article.statusList;

    private formItem:any = {
    }

    private ruleInline:object = {
    }

    private skillCategoryList:any= {
    }

    created(){
        this.start();
    }
    async start(){
        console.log(this.$route.query.id)
        if (this.$route.query.id) {
            manageSkillCategoryUpdateDetail(this.$route.query.id)
                .then((res:any)=>{
                    this.formItem = res.data;
                })
        }
    }
    submit(){
        manageSkillCategoryUpdateServe(this.formItem).then((res:any)=>{
            console.log(res)
            this.cleans()
        })
    }

    cleans(){
        this.$router.push("/articleCategory/list");
    }
}
