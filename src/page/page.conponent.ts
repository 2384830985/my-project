import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'tPage',
    props: {
        changePage:{
            type: Function,
            default:()=>{
                return ''
            }
        },
        total:{
            type: Number,
            default: 1
        },
        current:{
            type: Number,
            default: 1
        },
        pageSize:{
            type: Number,
            default: 10
        }
    }
})
export default class tPage extends Vue {

}
