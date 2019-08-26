import { Component, Vue } from 'vue-property-decorator';
import TContent from "@/t-components/t-content/index.vue";
import TTitle from "@/t-components/t-content-title/index.vue";
import TContentCon from "@/t-components/t-content-con/index.vue";
import { manageSkillCategoryList } from "@/api/skillCategory/skillCategory";
import { manageArticleUpdateSave,manageArticleDetail } from "@/api/acrticle/acrticleAxios";
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
        })
    }

    onSuccessImg(file:any){
        this.formItem.image = file.data.url;
    }

    cleans(){
        this.$router.go(-1);
    }
}
