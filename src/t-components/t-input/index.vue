<template>
    <div>
        <input type="text"
               :value="currentValue"
               @input="handleInput"
               @blur="handleBlur"
        />
    </div>
</template>

<script lang="ts">
    import Emitter from '@/mixins/emitter.js';
    import { Component, Vue, Prop,Watch } from 'vue-property-decorator';
    @Component({
        name: 'TInput',
        mixins: [Emitter],
    })
    export default class TInput extends Vue{
        @Prop(String)
        value!:string|number;
        public currentValue:string|number = '';
        created(){
            this.currentValue = this.value
        }
        @Watch('value')
        onChildChanged (val:any) {
            this.currentValue = val;
        }

        handleInput(event:any){
            const value:string = event.target.value;
            this.currentValue = value;
            this.$emit('input', value);
            this.dispatch('tFormItem', 'on-form-change', value);
        }
        handleBlur(e:any){
            this.dispatch('tFormItem', 'on-form-blur', this.currentValue);
        }
    }
</script>

<style lang="less" scoped>

</style>