<template>
    <t-content class="t-content-pad">
        <div>
            <t-title title="文章类目列表" />
            <t-content-con content="文章类目的列表。" />
            <Table :columns="columns" :data="data" size="small">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="update(row)">修改</Button>
                    <Poptip
                            confirm
                            title="是否删除该类目?"
                            @on-ok="remove(row)"
                    >
                        <Button type="error" size="small">删除</Button>
                    </Poptip>
                </template>
            </Table>
            <t-page :changePage="changePage" :total="page.total" :current="page.current" :pageSize="page.pageSize"></t-page>
        </div>
    </t-content>
</template>

<script lang="ts">
    import ArticleCategoryList from './articleCategoryList.conponent';
    export default ArticleCategoryList;
</script>

<style>
    .ivu-poptip-confirm .ivu-poptip-body .ivu-icon {
        left: 20px!important;
    }
</style>
