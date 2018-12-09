<!--
<template>
    <div class="okr-progress">
        <scroller lock-y :scrollbar-x=false>
            <div class="box1">
                <div class="box1-item" v-for="item in [1, 2, 3]">
                    <h3>第一季度考核</h3>
                    <flow>
                        <template v-for="(i, index) in steps">
                            <flow-state    state=" " :is-done="i.isDone">
                                <i slot="title" :class="'iconfont '+ i.icon"></i>
                            </flow-state>
                            <flow-line v-if="index != (steps.length - 1)" :is-done="i.lineDone" :tip="i.tip ? i.tip : null">
                            </flow-line>
                        </template>
                    </flow>
                    <ul class="okr-content">
                        <li>
                            <i class="iconfont icon-icon-write"></i>
                            <span>填写okr</span>
                            <strong>2018年11月12日</strong>
                        </li>
                        <li>
                            <i class="iconfont icon-icon-choose"></i>
                            <span>选择考评人</span>
                            <strong>2018年12月06日</strong>
                        </li>
                        <li>
                            <i class="iconfont icon-icon-assess2"></i>
                            <span>评价任务</span>
                            <strong>2018年12月24日</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </scroller>

    </div>
</template>

<script>
    import { Flow, FlowState, FlowLine,Scroller } from 'vux'
    export default {
        components: {
            Flow,
            FlowState,
            FlowLine,
            Scroller
        },
        data () {
            return {
                steps: [{
                    title: '开始',
                    isDone: true,
                    lineDone: true,
                    icon: "icon-icon-start"
                },{
                    title: '填写okr',
                    isDone: true,
                    lineDone: false,
                    icon: "icon-icon-write"
                },{
                    title: '选择考评人',
                    isDone: false,
                    lineDone: false,
                    icon: "icon-icon-choose"
                },{
                    title: '评价任务',
                    isDone: false,
                    lineDone: false,
                    icon: "icon-icon-assess2"
                },{
                    title: '完成',
                    isDone: false,
                    lineDone: false,
                    icon: "icon-icon-end"
                }
                ]
            }
        }
    }
</script>

<style lang="less">
    .okr-progress {
        background-color: rgba(212, 250, 224, .3);
        .weui-wepay-flow, .weui-wepay-flow-auto {
            padding: 0PX 30PX 38PX
        }
        .weui-wepay-flow__process {
            background-color: #48d484;
            /*height: 4PX;*/
        }
        .weui-wepay-flow__li_done .weui-wepay-flow__state {
            background-color: #48d484;
            /*border: 2PX solid #13f5ff;*/
        }
        .weui-wepay-flow__li_done .weui-wepay-flow__title-bottom {
            color: #48d484;
            font-size: 13PX;
        }
        [class^="weui-wepay-flow__title-"], [class*=" weui-wepay-flow__title-"] {
            color: #e2e2e2;
            font-size: 13PX;
        }
        .weui-wepay-flow__title-bottom {
            top:12PX;
        }
        .okr-content {
            padding: 0 20PX 10px;
            color:#48d484;
            overflow: hidden;
            li {
                height: 54px;
                line-height:54px;
            }
            i {
                margin-right: 16px;
            }
            strong {
                float: right;
            }

        }

        .box1 {
            /*height: 100px;*/
            position: relative;
            width: 2220px;
        }
        .box1-item {
            /*background-image: -webkit-linear-gradient(90deg,#5feff5, #378bcb);*/
            background-color: #fff;
            width: 720px;
            display:inline-block;
            margin-left: 15px;
            margin-bottom: 20px;
            margin-top: 20px;
            border-radius:10px;
            box-shadow: 0 0 8px #daf6e6;
            float: left;
            /*text-align: center;*/
            line-height: 100px;
            h3 {
                text-align: center;
                color:#FF9800;
                font-family:"宋体";
                font-weight: bold;
                font-size: 38px;
            }
        }
    }

</style>
-->


<template>
    <div class="okr-progress">
        <swiper :aspect-ratio="180/320">
            <swiper-item class="box1-item" v-for="(item, index) in [1, 2, 3]" :key="index">
                <h3>第一季度考核</h3>
                <flow>
                    <template v-for="(i, index) in steps">
                        <flow-state    state=" " :is-done="i.isDone">
                            <i slot="title" :class="'iconfont '+ i.icon"></i>
                        </flow-state>
                        <flow-line v-if="index != (steps.length - 1)" :is-done="i.lineDone" :tip="i.tip ? i.tip : null">
                        </flow-line>
                    </template>
                </flow>
                <ul class="okr-content">
                    <li>
                        <i class="iconfont icon-icon-write"></i>
                        <span>填写okr</span>
                        <strong>2018年11月12日</strong>
                    </li>
                    <li>
                        <i class="iconfont icon-icon-choose"></i>
                        <span>选择考评人</span>
                        <strong>2018年12月06日</strong>
                    </li>
                    <li>
                        <i class="iconfont icon-icon-assess2"></i>
                        <span>评价任务</span>
                        <strong>2018年12月24日</strong>
                    </li>
                </ul>
            </swiper-item>
        </swiper>



       <!-- <scroller lock-y :scrollbar-x=false>
            <div class="box1">
                <div class="box1-item" v-for="item in [1, 2, 3]">
                    <h3>第一季度考核</h3>
                    <flow>
                        <template v-for="(i, index) in steps">
                            <flow-state    state=" " :is-done="i.isDone">
                                <i slot="title" :class="'iconfont '+ i.icon"></i>
                            </flow-state>
                            <flow-line v-if="index != (steps.length - 1)" :is-done="i.lineDone" :tip="i.tip ? i.tip : null">
                            </flow-line>
                        </template>
                    </flow>
                    <ul class="okr-content">
                        <li>
                            <i class="iconfont icon-icon-write"></i>
                            <span>填写okr</span>
                            <strong>2018年11月12日</strong>
                        </li>
                        <li>
                            <i class="iconfont icon-icon-choose"></i>
                            <span>选择考评人</span>
                            <strong>2018年12月06日</strong>
                        </li>
                        <li>
                            <i class="iconfont icon-icon-assess2"></i>
                            <span>评价任务</span>
                            <strong>2018年12月24日</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </scroller>-->

    </div>
</template>

<script>
    import { Swiper, SwiperItem, Flow, FlowState, FlowLine,Scroller } from 'vux'
    export default {
        components: {
            Swiper,
            SwiperItem,
            Flow,
            FlowState,
            FlowLine,
            Scroller
        },
        data () {
            return {
                steps: [{
                    title: '开始',
                    isDone: true,
                    lineDone: true,
                    icon: "icon-icon-start"
                },{
                    title: '填写okr',
                    isDone: true,
                    lineDone: true,
                    icon: "icon-icon-write"
                },{
                    title: '选择考评人',
                    isDone: true,
                    lineDone: false,
                    icon: "icon-icon-choose"
                },{
                    title: '评价任务',
                    isDone: false,
                    lineDone: false,
                    icon: "icon-icon-assess2"
                },{
                    title: '完成',
                    isDone: false,
                    lineDone: false,
                    icon: "icon-icon-end"
                }
                ]
            }
        }
    }
</script>

<style lang="less">
    .okr-progress {
        background-color: rgba(212, 250, 224, .3);
        .weui-wepay-flow, .weui-wepay-flow-auto {
            padding: 0PX 30PX 38PX
        }
        .weui-wepay-flow__process {
            background-color: #48d484;
            /*height: 4PX;*/
        }
        .weui-wepay-flow__li_done .weui-wepay-flow__state {
            background-color: #48d484;
            /*border: 2PX solid #13f5ff;*/
        }
        .weui-wepay-flow__li_done .weui-wepay-flow__title-bottom {
            color: #48d484;
            font-size: 13PX;
        }
        [class^="weui-wepay-flow__title-"], [class*=" weui-wepay-flow__title-"] {
            color: #e2e2e2;
            font-size: 13PX;
        }
        .weui-wepay-flow__title-bottom {
            top:12PX;
        }
        .okr-content {
            padding: 0 20PX 10px;
            color:#48d484;
            overflow: hidden;
            li {
                height: 54px;
                line-height:54px;
            }
            i {
                margin-right: 16px;
            }
            strong {
                float: right;
            }

        }

        .box1 {
            /*height: 100px;*/
            position: relative;
            width: 2220px;
        }
        .box1-item {
            background-color: #fff;
            line-height: 100px;
            h3 {
                text-align: center;
                color:#FF9800;
                font-family:"宋体";
                font-weight: bold;
                font-size: 38px;
            }
        }

        .vux-slider {
            padding: 20px;
        }
        .vux-slider > .vux-swiper {
            border-radius:10px;
            box-shadow: 0 0 8px #daf6e6;
        }

        .vux-slider > .vux-swiper > .vux-swiper-item {
            width: 710px;
        }
    }

</style>