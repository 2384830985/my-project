<template>
    <div>
        <Row :gutter="10">
            <Col span="6">
                <t-content class="t-content-pad">
                    <div>
                        <Row>
                            <Col span="12">
                                <div class="t-home-img">
                                    <img src="../../assets/image/rentou.png" class="w-100 h-100" alt="">
                                </div>
                            </Col>
                            <Col span="12">
                                <div class="t-home-title">访问人数</div>
                                <div class="t-home-content">1,0000</div>
                            </Col>
                        </Row>
                    </div>
                </t-content>
            </Col>
            <Col span="6">
                <t-content class="t-content-pad">
                    <div>
                        <Row>
                            <Col span="12">
                                <div class="t-home-img">
                                    <img src="../../assets/image/yingshou.png" class="w-100 h-100" alt="">
                                </div>
                            </Col>
                            <Col span="12">
                                <div class="t-home-title">当日营收</div>
                                <div class="t-home-content">1,0000</div>
                            </Col>
                        </Row>
                    </div>
                </t-content>
            </Col>
            <Col span="6">
                <t-content class="t-content-pad">
                    <div>
                        <Row>
                            <Col span="12">
                                <div class="t-home-img">
                                    <img src="../../assets/image/xiaolaing.png" class="w-100 h-100" alt="">
                                </div>
                            </Col>
                            <Col span="12">
                                <div class="t-home-title">当日销量</div>
                                <div class="t-home-content">1,0000</div>
                            </Col>
                        </Row>
                    </div>
                </t-content>
            </Col>
            <Col span="6">
                <t-content class="t-content-pad">
                    <div>
                        <Row>
                            <Col span="12">
                                <div class="t-home-img">
                                    <img src="../../assets/image/gouwuche.png" class="w-100 h-100" alt="">
                                </div>
                            </Col>
                            <Col span="12">
                                <div class="t-home-title">当前总销量</div>
                                <div class="t-home-content">1,0000</div>
                            </Col>
                        </Row>
                    </div>
                </t-content>
            </Col>
        </Row>
        <!--第二部分-->
        <Row :gutter="10" class="mt-2">
            <Col span="12">
                <t-content class="t-content-pad" >
                    <div class="table-line" ref="userCon">
                        <div class="table-title">国内地域分布数据折线表</div>
                        <div ref="users" :style="users"></div>
                    </div>
                </t-content>
            </Col>
            <Col span="12">
                <t-content class="t-content-pad" >
                    <div class="table-line" ref="provinceCon">
                        <div class="table-title">国内地域分布数据折线表</div>
                        <div ref="provinceChart" :style="province"></div>
                    </div>
                </t-content>
            </Col>
        </Row>
        <t-content class="t-content-pad mt-2">
            <div>
                <t-title title="数据" />
                <t-content-con content="echarts。" />
                <div class="table-line" ref="chartsCon">
                    <div class="table-title">国内地域分布数据折线表</div>
                    <div ref="charts" :style="charts"></div>
                </div>
            </div>
        </t-content>
    </div>

</template>

<script lang="ts">
    import homeData from './homeData.conponent';
    export default homeData;
</script>

<style scoped>
    .charts{
         width: 1000px;
         height: 1000px;
     }
    .t-home-img{
        width: 100px;
        height: 100px;
    }
    .t-home-title{
        width: 100%;
        text-align: right;
        padding-top: 10px;
        font-size: 16px;
    }
    .t-home-content{
        width: 100%;
        text-align: right;
        padding-top: 10px;
        font-size: 20px;
        color: #515151;
        font-weight: bold;
    }
</style>
