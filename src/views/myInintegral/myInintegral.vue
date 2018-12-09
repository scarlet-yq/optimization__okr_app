<template>
    <div>
        <Header title="我的积分" :left="true" :isabsolute="true"></Header>
        <MyIntegral></MyIntegral>
        <div class="integral-detail">
            <group gutter="0" class="title">
                <cell :border-intent="false"  class="myorder"    >
                    <span slot="title"><i class="upright"></i>最近兑换/竞拍记录</span></span>
                </cell>
            </group>
            <div class="icon-link-wrap">
                <p class="icon-link"></p>
            </div>
            <div class="icon-link-wrap-right">
                <p class="icon-link"></p>
            </div>
            <div class="table-wrap">
                <x-table :cell-bordered="false" :content-bordered="false"  style="width:100%;margin: 0 auto;border-left: 1px solid #d2e4f0;border-right: 1px solid #d2e4f0;overflow:hidden;background-color:#fff;border-radius:10px; border-collapse:separate;">
                    <thead>
                    <tr style="background-color: #d9f6e5;color:#44d381;font-size: 14px;">
                        <th width="150">时间</th>
                        <th>姓名</th>
                        <th>积分数</th>
                    </tr>
                    </thead>
                    <tbody style="color:#666;">
                    <tr v-for="(item, index) in integralDetail.integralDetailList" :key="index">
                        <td>{{ item.time }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.integralAccount }}</td>
                    </tr>
                    </tbody>
                </x-table>
            </div>
        </div>



        <!--<p class="detailtitle">积分明细</p>
        <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
            <thead>
                <tr style="background-color: #F7F7F7">
                    <th width="150">时间</th>
                    <th>姓名</th>
                    <th>积分数</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in integralDetail.integralDetailList" :key="index">
                    <td>{{ item.time }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.integralAccount }}</td>
                </tr>
            </tbody>
        </x-table>-->
        <Page :total="integralDetail.total" :current-page="integralDetail.current" :display="integralDetail.display"  @pagechange="pagechange"></Page>
        <Footer></Footer>
    </div>
</template>

<script>
    import {XTable, Group, Cell} from 'vux';
    import MyIntegral from '../home/components/myIntegral';
    import { userResource } from '../../api';
    import Page from '../my-components/page/page';
    import Header from '../my-components/app-header/app-header';
    import Footer from '../my-components/app-footer/app-footer';

    export default {
        components: {
            Header,
            Footer,
            XTable,
            Group,
            Cell,
            MyIntegral,
            Page
        },
        data() {
          return  {
              integralDetail: {}
          }
        },
        mounted() {
            this.pagechange(1);
        },
        methods: {
            pagechange:function(currentPage){
                let { id } = this.$route.query;
                userResource.getIntegralDetailList(
                    id,
                    currentPage,
                    10
                ).then(response => {
                    let {code, data} = response;
                    if (code === 0) {
                        this.integralDetail = data;
                    }
                })
                // console.log(currentPage);
                // ajax请求, 向后台发送 currentPage, 来获取对应的数据

            }
        }
    }
</script>

<style lang="less" >
    .detailtitle {
        height: 70px;
        line-height:70px;
        padding:0 30px;
        color: #333;
        font-size: 34px;
        border-bottom:1px solid #efefef;
        padding-top: 30px;
    }


    .integral-detail {
        /*background-color: #d2e4f0;*/
        position: relative;
        padding: 30px 20px;
        background-color: rgba(212, 250, 224, .3);
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
            margin-bottom: 20px;
        }

        .title {
            color: #f5b862;
            font-size: 30px;
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
                z-index: 1;
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
                z-index: 1;
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
        .table-wrap {
            background-color: #f5f5f5;
            padding: 30px 20px;
            border-radius: 18px;
        }
    }


</style>