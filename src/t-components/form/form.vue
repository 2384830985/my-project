<template>
    <form>
        <slot></slot>
    </form>
</template>

<script lang="ts">
    import {Vue,Component,Prop} from 'vue-property-decorator'
    @Component({
        name: 'tForm',
        provide() {
            return {
                form : this
            };
        },
    })
    export default class tForm extends Vue{
        @Prop(Object)
        Model!:object;
        @Prop(Object)
        rules!:object;
        /**
         * 节点集合
         * @type {any[]}
         */
        private fields:object[] = [];

        created(){
            // 添加节点
            this.$on('on-form-item-add', (field) => {
                if (field) this.fields.push(field);
            });
            // 删除节点
            this.$on('on-form-item-remove', (field) => {
                if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
            });
        }
        // 公开方法：全部重置数据
        resetFields() {
            this.fields.forEach(field => {
                field.resetField();
            });
        }
        // 公开方法：全部校验数据，支持 Promise
        validate(callback) {
            return new Promise(resolve => {
                let valid = true;
                let count = 0;
                this.fields.forEach(field => {
                    field.validate('', errors => {
                        if (errors) {
                            valid = false;
                        }
                        if (++count === this.fields.length) {
                            // 全部完成
                            resolve(valid);
                            if (typeof callback === 'function') {
                                callback(valid);
                            }
                        }
                    });
                });
            });
        }
    }
</script>

<style lang="less" scoped>

</style>