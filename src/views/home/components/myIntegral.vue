<template>
    <div class="myIntegral-wrap">
        <group gutter="0" class="title">
            <cell :border-intent="false"  class="myorder"   is-link >
                <span slot="title"><i class="upright"></i>我的积分</span></span>
            </cell>
        </group>
        <div class="icon-link-wrap">
            <p class="icon-link"></p>
        </div>
        <div class="icon-link-wrap-right">
            <p class="icon-link"></p>
        </div>
        <div class="myIntegral">
            <div class="bgcwhite">
                <flexbox class="flexwrap">
                    <flexbox-item>
                        <div class="flex-demo">
                            <strong>1800</strong>
                            <i></i>
                            <span>总积分</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo">
                            <strong>1200</strong>
                            <i></i>
                            <span>可用积分</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo">
                            <strong>200</strong>
                            <i></i>
                            <span>已用积分</span>
                        </div>
                    </flexbox-item>
                </flexbox>
            </div>
        </div>
    </div>
</template>

<script>
    import { Grid,Flexbox,Group, Cell, FlexboxItem, GridItem, GroupTitle,VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale } from 'vux';
    import {homeResource} from '../../../api';

    export default {
        components: {
            VChart,
            VLine,
            VArea,
            VTooltip,
            VLegend,
            VBar,
            VPie,
            VGuide,
            VScale,
            Grid,
            GridItem,
            GroupTitle,
            Flexbox,
            FlexboxItem,
            Group,
            Cell
        },
        data() {
            return {
                htmlOptions: {},
                legendOptions: {},
                map: {},
                data: [],
                validScoreTotal: 0,
                intergralArr: [
                    {
                        text: "我的积分",
                        icon: "icon-icon-wodejifen",
                        score: ""
                    },
                    {
                        text: "可用积分",
                        icon: "icon-icon-wodejifen",
                        score: 1200
                    },
                    {
                        text: "已用积分",
                        icon: "icon-icon-wodejifen",
                        score: 390
                    },
                    {
                        text: "总积分",
                        icon: "icon-icon-wodejifen",
                        score: 1490
                    },
                ]
            }
        },
        mounted() {
            homeResource.queryCurrentUserScoreInfo()
                .then(response => {
                    let { code, data } = response;
                    if (code === 0) {
                        this.$nextTick(() => {
                            this.data = [
                                { name: '可用积分', percent: data.workabilityScoreTotal, a: '1' },
                                { name: '使用积分', percent: data.abatementScoreTotal, a: '1' }
                            ];
                            let map = {};
                            this.data.map(obj => {
                                map[obj.name] = obj.percent ;
                            });
                            this.map = map;
                            this.legendOptions = {
                                position: 'bottom',
                                align: 'center',
                                padding: [100, 0, 0, 0],
                                height: '200',
                                itemFormatter: (val) => {
                                    return  '   ' + val + '                               ' + (this.map[val]) + '     '
                                }
                            };
                            this.htmlOptions = {
                                position: [ '50%', '50%' ],
                                html: `
                                  <div style="width: 250px;height: 40px;text-align: center;">
                                    <div style="font-size: 16px;padding-bottom: 6px;">总积分</div>
                                    <div style="font-size: 18px">${data.validScoreTotal}</div>
                                  </div>`
                            };
                        });
                    }
                })
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/1px.less';
    



    .myIntegral-wrap {
        position: relative;
        padding: 30px 20px 0;
        background-color: rgba(212, 250, 224, .2);
        .weui-cells:before,
        .weui-cells:after {
            border: none;
        }
        .weui-cell {
            padding: 15PX;
        }
        .weui-cells {
            /*padding: 15PX;*/
            border-radius: 8px;
            box-shadow: 0 0 5px #daf6e6;
        }
        .title {
            color: #f5b862;
            font-size: 34px;
            font-family: "宋体";
            font-weight: bold;
            .upright {
                display: inline-block;
                width: 10px;
                height: 40px;
                margin-right: 14px;
                background-color: #48d484;
                position: relative;
                top: 5px;
            }
        }
        .icon-link-wrap {
            /*background-color: #fff;*/
            position: absolute;
            left: 70px;
            top: 130px;
            &:before {
                content: "";
                position: absolute;
                left: -5px;
                top: -10px;
                width: 24px;
                height: 24px;
                background-color: #47d383;
                border-radius: 50%;
            }
            &:after {
                content: "";
                position: absolute;
                bottom: -12px;
                left: -5px;
                width: 24px;
                height: 24px;
                background-color: #47d383;
                border-radius: 50%;
            }
            .icon-link {
                width: 8px;
                height: 50px;
                border: 3px solid #fff;
                background-color: #c1e6d1;
                border-radius: 7px;
                position: relative;
                z-index: 100;

            }
        }
        .icon-link-wrap-right {
            position: absolute;
            right: 70px;
            top: 130px;
            &:before {
                content: "";
                position: absolute;
                left: -5px;
                top: -10px;
                width: 24px;
                height: 24px;
                background-color: #47d383;
                border-radius: 50%;
            }
            &:after {
                content: "";
                position: absolute;
                bottom: -12px;
                left: -5px;
                width: 24px;
                height: 24px;
                background-color: #47d383;
                border-radius: 50%;
            }
            .icon-link {
                width: 8px;
                height: 50px;
                border: 3px solid #fff;
                background-color: #c1e6d1;
                border-radius: 7px;
                position: relative;
                z-index: 100;

            }
        }

    }




    .myIntegral {
        padding: 20px 0px 0;
        .bgcwhite {
            background-color: #fff;
            padding:30px 20px;
            border-radius: 8px;
        }
        .flexwrap {
            overflow: hidden;
            background-color: #fff;
            border-radius: 8px;
            pading: 20px;
        }
        .flex-demo {
            color: #333;
            background-color: #f5f5f5;
            padding: 40px 30px;
            border-radius: 8px;
            background-clip: padding-box;
            strong {
                display: inline-block;
                padding-bottom: 10px;
                font-size: 50px;
                color: #4e545c;
            }
            i {
                display: block;
                width: 32px;
                height: 8px;
                border-radius: 4px;
                background: #48d484;
                margin-left:4px;
            }
            span {
                display: block;
                padding-top: 20px;
                color: #a0a2a1;
            }
        }

    }
</style>