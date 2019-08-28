<template>
    <t-content class="t-content-pad">
        <div>
            <t-title :title="formItem.id?'修改文章类目':'新增文章类目'" />
            <t-content-con content="文章类目的新增修改。" />
            <Form ref="formItem" :model="formItem" :rules="ruleInline" :label-width="80">
                <Row>
                    <Col span="12">
                        <FormItem label="类目名称">
                            <Input v-model="formItem.name" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="是否启用">
                            <Select v-model="formItem.status">
                                <Option v-for="(item,index) in statusList" :key="index" :value="item.value">{{item.title}}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem>
                    <Button type="primary" @click="submit">提交</Button>
                    <Button style="margin-left: 8px" @click="cleans">取消</Button>
                </FormItem>
            </Form>
        </div>
    </t-content>
</template>

<script lang="ts">
    import ArticleCategoryAdd from './articleCategoryAdd.conponent';
    export default ArticleCategoryAdd;
</script>

<style scoped>

</style>

