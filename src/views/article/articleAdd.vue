<template>
    <t-content class="t-content-pad">
        <div>
            <t-title :title="formItem.id?'修改文章':'新增文章'" />
            <t-content-con content="文章的新增修改。" />
            <Form ref="formItem" :model="formItem" :rules="ruleInline" :label-width="80">
                <Row>
                    <Col span="12">
                        <FormItem label="文章标题">
                            <Input v-model="formItem.title" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="文章副标题">
                            <Input v-model="formItem.small" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="点赞数">
                            <Input v-model="formItem.good" disabled placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="点击数量">
                            <Input v-model="formItem.see" disabled placeholder="Enter something..."></Input>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="文章类目">
                    <Select v-model="formItem.categoryId">
                        <Option v-for="item in skillCategoryList" :value="item.id">{{item.name}}</Option>
                    </Select>
                </FormItem>
                <FormItem label="文章内容">
                    <Input v-model="formItem.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="图片上传">
                    <Upload action="/manage/product/upload" name="upload_file"
                            :max-size="1000"
                            :before-upload="handleBeforeUpload"
                            :on-remove="removeImg"
                            :default-file-list="defaultFileList"
                            :on-success="onSuccessImg">
                        <Button icon="ios-cloud-upload-outline">Upload files</Button>
                    </Upload>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="submit">提交</Button>
                    <Button style="margin-left: 8px" @click="cleans">取消</Button>
                </FormItem>
            </Form>
        </div>
    </t-content>
</template>

<script lang="ts">
    import ArticleAdd from './articleAdd.conponent';
    export default ArticleAdd;
</script>

<style scoped>

</style>
