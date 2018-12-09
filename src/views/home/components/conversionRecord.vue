<template>
    <div class="records">
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
                    <th>商品名称</th>
                    <th>姓名</th>
                    <th>积分数</th>
                </tr>
                </thead>
                <tbody style="color:#666;">
                <tr v-for="(item, index) in conversionlist" :key="index">
                    <td>{{ item.productName }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.points }}</td>
                </tr>
                </tbody>
            </x-table>
        </div>
    </div>
    
</template>

<script>
    import {XTable, Group, Cell} from 'vux';
    import {homeResource} from '../../../api';

    export default {
        components: {
            XTable,
            Group,
            Cell
        },
        data() {
          return {
              conversionlist: []
          }
        },
        mounted() {
            homeResource.list()
                .then(response => {
                    let {code, data} = response;
                    if (code === 0) {
                        this.conversionlist = data;
                    }
                })
        }
    }
</script>

<style lang="less">
    .records {
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
            padding:30px 20px;
            border-radius: 18px;
        }

    }
</style>