import { Component, Vue } from 'vue-property-decorator';
import TContent from "@/t-components/t-content/index.vue";
import TTitle from "@/t-components/t-content-title/index.vue";
import TContentCon from "@/t-components/t-content-con/index.vue";
import * as Echarts from 'echarts';
@Component({
    components: {TContentCon, TTitle, TContent},
})
export default class homeDataConponent extends Vue {
    mounted(){
        this.chinaConfigure()
    }
    start(){

    }

    public app:any = {
        title: "坐标轴刻度与标签对齐"
    };
    public users:any = {

    }
    public province:any = {

    }
    public charts:any = {

    }

    // 柱状图
    public optionUser: any= {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'邮件营销',
                type:'bar',
                stack: '广告',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'bar',
                stack: '广告',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'bar',
                stack: '广告',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'搜索引擎',
                type:'bar',
                data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine : {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data : [
                        [{type : 'min'}, {type : 'max'}]
                    ]
                }
            },
            {
                name:'百度',
                type:'bar',
                barWidth : 5,
                stack: '搜索引擎',
                data:[620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name:'谷歌',
                type:'bar',
                stack: '搜索引擎',
                data:[120, 132, 101, 134, 290, 230, 220]
            },
            {
                name:'必应',
                type:'bar',
                stack: '搜索引擎',
                data:[60, 72, 71, 74, 190, 130, 110]
            },
            {
                name:'其他',
                type:'bar',
                stack: '搜索引擎',
                data:[62, 82, 91, 84, 109, 110, 120]
            }
        ]
    };

    // 折线图数据
    public optionZX:any = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };


    // TODO 开始执行
    public chinaConfigure(){
        this.users = {
            width: this.$refs.userCon.getBoundingClientRect().width + 'px',
            height: '500px'
        }
        this.province = {
            width: this.$refs.provinceCon.getBoundingClientRect().width + 'px',
            height: '500px'
        }
        this.charts = {
            width: this.$refs.chartsCon.getBoundingClientRect().width + 'px',
            height: '500px'
        }
        this.$nextTick(()=>{
            var myChart = Echarts.init(this.$refs.provinceChart);
            myChart.setOption(this.option, true);

            //user
            console.log(this.$refs.userCon.getBoundingClientRect().width);

            var myChart1 =Echarts.init(this.$refs.users);
            myChart1.setOption(this.optionUser, true);

            var myChart2 =Echarts.init(this.$refs.charts);
            myChart2.setOption(this.optionZX, true);
        })

    }

    // 非空断言
    $refs!:{
        provinceChart: HTMLDivElement,
        users: HTMLDivElement,
        userCon: HTMLDivElement,
        provinceCon: HTMLDivElement,
        charts: HTMLDivElement,
        chartsCon: HTMLDivElement,
    };
    // 获取饼图数据
    private data = this.genData(50);

    // 饼图
    private option:Object = {
        title : {
            text: '同名数量统计',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: this.data.legendData,

            selected: this.data.selected
        },
        series : [
            {
                name: '姓名',
                type: 'pie',
                radius : '55%',
                center: ['40%', '50%'],
                data: this.data.seriesData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 饼图数据
    public genData(count:any) {
        var nameList = [
            '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
        ];
        var legendData:any = [];
        var seriesData:any = [];
        var selected:any = {};
        for (var i = 0; i < 50; i++) {
            let name:any = Math.random() > 0.65
                ? makeWord(4, 1) + '·' + makeWord(3, 0)
                : makeWord(2, 1);
            legendData.push(name);
            seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000)
            });
            selected[name] = i < 6;
        }

        return {
            legendData: legendData,
            seriesData: seriesData,
            selected: selected
        };

        function makeWord(max:any, min:any) {
            var nameLen = Math.ceil(Math.random() * max + min);
            var name = [];
            for (var i = 0; i < nameLen; i++) {
                name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
            }
            return name.join('');
        }
    }
}
