<template>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="total" :current="current" @on-change="changePage" :page-size="pageSize"></Page>
        </div>
    </div>
</template>

<script lang="ts">
    import page from './page.conponent'
    export default page
</script>

<style scoped>

</style>
