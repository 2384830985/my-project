import { Component, Vue } from 'vue-property-decorator';
import { Particles } from '@/components/vueparticles'
import { login } from "@/api/login";
import {State,Mutation} from 'vuex-class'
/**
 * 账号的校验
 */
interface interFaceForm{
    username    : string,
    password: string,
}

/**
 * 登陆的校验
 */
interface LoginRulesFun{
    username: {
        required : boolean,
        trigger  : string,
        validator: Function,
    };
    password: {
        required : boolean,
        trigger  : string,
        validator: Function,
    };
}

@Component({
    components: {
        Particles,
    }
})
export default class Login extends Vue {
    @Mutation GET_TOKEN:any;
    // 非空断言
    $refs!:{
        sizeForm: HTMLFormElement;
    }
    /**
     * 变量的校验
     */
    private sizeForm:interFaceForm = {
        username    : '',
        password: ''
    }
    /**
     * 表单校验
     */
    private loginRules: LoginRulesFun = {
        username: {
            required : false,
            trigger  : 'change',
            validator: (rule: any, value: string, callback: (res?: any) => {}) => {
                if (!value) {
                    callback(new Error('请输入登陆账号'));
                } else {
                    callback();
                }
            },
        },
        password: {
            required : false,
            trigger  : 'change',
            validator: (rule: any, value: string, callback: (res?: any) => {}) => {
                if (!value) {
                    callback(new Error('请输入密码'));
                } else {
                    if (value.length < 4) {
                        callback(new Error('密码不能小于4位'));
                    } else {
                        callback();
                    }
                }
            },
        },
    }

    constructor(){
        super()
    }
    /**
     * 登陆
     */
    submit(){
        let _this = this;
        this.$refs.sizeForm.validate((valid:Object) => {
            console.log(valid)
            if (valid) {
                login(this.sizeForm).then((res:any)=>{
                    this.$Message.success('登陆成功');
                    _this.GET_TOKEN('1')
                    _this.$router.push('/home/homeData');
                })
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
}
