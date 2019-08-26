<template>
    <t-content class="t-content-pad">
        <div>
            <t-title title="文章列表" />
            <t-content-con content="文章的列表。" />
            <Table :columns="columns" :data="data" size="small">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="update(row)">修改文章</Button>
                    <Poptip
                            confirm
                            title="是否删除该文章?"
                            @on-ok="remove(row)"
                    >
                        <Button type="error" size="small">删除文章</Button>
                    </Poptip>
                </template>
            </Table>
            <t-page :changePage="changePage" :total="page.total" :current="page.current" :pageSize="page.pageSize"></t-page>
        </div>
    </t-content>
</template>

<script lang="ts">
    import AcrticleList from './articleList.conponent';
    export default AcrticleList;
</script>

<style>
    .ivu-poptip-confirm .ivu-poptip-body .ivu-icon {
        left: 20px!important;
    }
</style>
