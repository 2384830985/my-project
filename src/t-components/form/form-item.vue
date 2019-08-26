<template>
    <div>
        <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">{{label}}</label>
        <div>
            <slot></slot>
            <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue,Prop,Component,Inject} from 'vue-property-decorator';
    import Emitter from '../../mixins/emitter.js';
    import AsyncValidator from 'async-validator';
    @Component({
        name: 'tFormItem',
        mixins: [Emitter],
    })
    export default class tFormItem extends Vue {
        private isRequired:boolean = false;
        private validateState:string = '';
        private validateMessage:string = '';
        private initialValue:string = '';
        @Inject() form: any;

        @Prop(String)
        label!:string;
        @Prop(String)
        prop!:string;
        // 从 Form 的 Model 中动态得到当前表单组件的数据
        get fieldValue () {
            console.log(this.form)
            return this.form.Model[this.prop];
        }
        // 组件渲染时，将实例缓存在 Form 中
        mounted () {
            // 如果没有传入 prop，则无需校验，也就无需缓存
            if (this.prop) {
                this.dispatch('tForm', 'on-form-item-add', this);
                // 设置初始值，以便在重置时恢复默认值
                this.initialValue = this.fieldValue;
                this.setRules();
                console.log(this.prop)
            }
        }
        // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
        getRules () {
            let formRules = this.form.rules;
            formRules = formRules ? formRules[this.prop] : [];
            return [].concat(formRules || []);
        }
        setRules(){
            let rules = this.getRules();
            if (rules.length) {
                rules.every((rule) => {
                    // 如果当前校验规则中有必填项，则标记出来
                    this.isRequired = rule.required;
                });
            }
            this.$on('on-form-blur', this.onFieldBlur);
            this.$on('on-form-change', this.onFieldChange);
        }
        /**
         * 校验数据
         * @param trigger 校验类型
         * @param callback 回调函数
         */
        validate(trigger, callback = function () {}) {
            console.log('chjengg')
            let rules = this.getFilteredRule(trigger);
            if (!rules || rules.length === 0) {
                return true;
            }
            // 设置状态为校验中
            this.validateState = 'validating';
            // 以下为 async-validator 库的调用方法
            let descriptor = {};
            descriptor[this.prop] = rules;
            console.log(descriptor)
            const validator = new AsyncValidator(descriptor);
            let model = {};
            model[this.prop] = this.fieldValue;
            validator.validate(model, { firstFields: true }, errors => {
                this.validateState = !errors ? 'success' : 'error';
                this.validateMessage = errors ? errors[0].message : '';
                console.log(this.validateMessage)
                console.log(this.validateState)
                callback(this.validateMessage);
            });
        }
        // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
        getFilteredRule (trigger) {
            const rules = this.getRules();
            return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
        }
        onFieldBlur() {
            this.validate('blur');
        }
        onFieldChange() {
            this.validate('change');
        }
        // 重置数据
        resetField () {
            this.validateState = '';
            this.validateMessage = '';
            this.form.Model[this.prop] = this.initialValue;
        }
        // 组件销毁前，将实例从 Form 的缓存中移除
        beforeDestroy () {
            this.dispatch('tForm', 'on-form-item-remove', this);
        }
    }
</script>

<style scoped>
    .i-form-item-label-required:before {
        content: '*';
        color: red;
    }
    .i-form-item-message {
        color: red;
    }
</style>