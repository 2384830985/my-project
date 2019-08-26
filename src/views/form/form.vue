<template>
    <t-content>
        <t-form ref="form" :model="formValidate" :rules="ruleValidate">
            <t-form-item label="123" prop="data">
                <t-input v-model="formValidate.data"/>
            </t-form-item>
            <t-form-item>
                <button @click="sibmit">提交</button>
                <button @click="clone">取消</button>
            </t-form-item>

        </t-form>
    </t-content>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";
    import TContent from "../../t-components/t-content/index.vue";
    import TForm from "../../t-components/form/form.vue";
    import TFormItem from "../../t-components/form/form-item.vue";
    import TInput from "../../t-components/t-input/index.vue";
    @Component({
        name: "formVer",
        components: {TInput, TFormItem, TForm, TContent}
    })
    export default class formVer extends Vue{
        // 非空断言
        $refs!:{
            form: HTMLFormElement;
        }
        private formValidate:object = {
            data: ''
        }
        private ruleValidate:object = {
            data: [
                { required: true, message: '用户名不能为空', trigger: 'blur' }
            ]
        }
        sibmit(){
            this.$refs.form.validate((valid)=>{
                console.log(valid)
            })
        }
        clone(){
            this.$refs.form.resetFields()
        }
    }
</script>

<style scoped>

</style>