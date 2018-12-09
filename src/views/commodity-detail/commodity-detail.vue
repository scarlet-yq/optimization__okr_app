<template>
    <div class="commodity-detail">
        <Header title="商品详情" :left="true" :isabsolute="true" color="#f78d65"></Header>
        <ImagePreviewer :imageList="productInfo.imgsList"></ImagePreviewer>
        <!--v-if="productInfo.status === 0"-->
        <div class="productAuctionIntroduct" v-show="productInfo.status === 0">
            <div class="detail_decoration">
                <div class="currentintegral">
                    <strong>当前积分{{productInfo.currentIntegral}}</strong>
                    <span>积分竞拍</span>
                </div>
                <div class="countdown">
                    <p class="countdown_text">距秒杀结束还剩</p>
                    <p class="countdown_nums">
                        <span id="_d" ref="_d">00</span>&nbsp;:
                        <span id="_h" ref="_h">00</span>&nbsp;:
                        <span id="_m" ref="_m">00</span>&nbsp;:
                        <span id="_s" ref="_s">00</span>
                    </p>
                </div>
            </div>
            <h3 class="productName">{{ productInfo.productName }}</h3>
            <div class="productauctioninfo">
                <flexbox>
                    <flexbox-item><div class="">起拍{{ productInfo.startIntegral }}积分</div></flexbox-item>
                    <flexbox-item><div class="text-middle">出价幅度{{productInfo.rangeIntegral}}积分</div></flexbox-item>
                    <flexbox-item><div class="color-red text-right">￥{{productInfo.price}}</div></flexbox-item>
                </flexbox>
            </div>
            <!--<p class="currentIntegral"> <span>当前积分*</span><strong>{{ productInfo.currentIntegral + '积分'}}</strong></p>
            <group class="countDownTime">
                <cell title="竞拍中">
                    <clocker @on-tick="toCountTime" format="%H 小时 %M 分 %S 秒" :time="productInfo.countDownTime"></clocker>
                </cell>
            </group>
            <flexbox :gutter="0" wrap="wrap" class="flexboxWrap">
                <flexbox-item :span="1/2" >
                    <div class="flex-demo">
                        <span>起拍积分*</span>
                        <strong>{{ productInfo.startIntegral }}积分</strong>
                    </div>
                </flexbox-item>
                <flexbox-item :span="1/2">
                    <div class="flex-demo">
                        <span>出价幅度*</span>
                        <strong>{{ productInfo.rangeIntegral }}积分</strong>
                    </div>
                </flexbox-item>
                <flexbox-item :span="1/2">
                    <div class="flex-demo">
                        <span>商品金额*</span>
                        <strong>￥{{ productInfo.price }}</strong>
                     </div>
                </flexbox-item>
            </flexbox>-->
            <div class="chooseIntegral">
                <flexbox>
                    <flexbox-item>
                        <label>积分*</label>
                        <select name="aa" class="selectWrap">
                            <option :key="index" v-for="(item, index) in productInfo.bindIntegralEnmu" :value="item">{{item}}</option>
                        </select>
                    </flexbox-item>
                    <flexbox-item>
                        <x-button mini type="warn" class="float-right">出价</x-button>
                    </flexbox-item>
                </flexbox>
            </div>
        </div>

        <!--<div class="productChangeIntroduct" v-else>
            <h3 class="productName">{{ productInfo.productName }}</h3>
            <div class="productChangeInfo">
                <flexbox>
                    <flexbox-item><div class="color-red">{{productInfo.productEndIntegral}}积分</div></flexbox-item>
                    <flexbox-item><div class="text-middle">库存{{productInfo.stock}}</div></flexbox-item>
                    <flexbox-item><div class="color-red text-right">￥{{productInfo.price}}</div></flexbox-item>
                </flexbox>
            </div>

            <div class="chooseAmount">
                <flexbox>
                    <flexbox-item>
                        <label>数量*</label>
                        <select name="aa" class="selectWrap">
                            <option :key="index" v-for="(item, index) in productInfo.amountEnum" :value="item">{{item}}</option>
                        </select>
                    </flexbox-item>
                    <flexbox-item>
                        <x-button mini type="warn" class="float-right">兑换</x-button>
                    </flexbox-item>
                </flexbox>
            </div>
        </div>-->


        <div class="productInfo">
            <tab active-color="#11C2EE" :line-width="1" custom-bar-width="60px">
                <tab-item selected   @on-item-click="getProductInfo">商品详情</tab-item>
                <tab-item v-if="productInfo.status === 0"  @on-item-click="getBiddersRecord">竞拍记录</tab-item>
            </tab>
            <div class="infoContent">
                DEIUHUIR4F <br>
                DEIUHUIR4F <br>
                DEIUHUIR4F <br>
                DEIUHUIR4F <br>
                DEIUHUIR4F <br>
                DEIUHUIR4F <br>
                DEIUHUIR4F
                DEIUHUIR4F
                DEIUHUIR4F
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>



<script>
    import ImagePreviewer from './components/imagePreviewer';
    import { commodityResource } from '../../api';
    import {Clocker, Cell, Group, Flexbox, FlexboxItem, XButton, Tab, TabItem } from 'vux';
    import getTime from './countTime';
    import Header from '../my-components/app-header/app-header';
    import Footer from '../my-components/app-footer/app-footer';

    export default {
        components: {
            ImagePreviewer,
            Header,
            Footer,
            Clocker,
            Cell,
            Group,
            Flexbox,
            FlexboxItem,
            XButton,
            Tab,
            TabItem
        },
        data() {
          return {
              productInfo: {}
          }
        },
        mounted() {
//            console.log("d", document.querySelector('#day'));
//            console.log("$refs", this.$refs)
//            for (let key in this.$refs) {
//                console.log("key---", key, this.$refs[key])
//            }
            let {id} = this.$route.params;
//            console.log("_day-----", this.$refs._d)
            commodityResource.queryOneCommodityInfo(id)
                .then(response => {
                    let { code, data } = response;
                    if (code === 0) {
                        this.productInfo = data;
                        getTime(data.countDownTime, this.$refs._d, this.$refs._h, this.$refs._m, this.$refs._s);
//                        console.log("_d-----", this.$refs._d)
//                        countTime(data.countDownTime, this.$refs._d, this.$refs._h, this.$refs._m, this.$refs._s);
                    }
                });
        },
        methods: {
            toCountTime() {
//                console.log("ahahs")
            },
            getProductInfo() {

            },
            getBiddersRecord() {

            }

        }
    }
</script>


<style lang="less">
    @import "./commodity-detail.less";

</style>




