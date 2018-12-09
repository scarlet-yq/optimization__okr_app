<template>
    <div>
        <Header title="OKR系统" :left="false" :isabsolute="true"></Header>
        <Commodity v-for="(item, index) in commodityList" :key="index" :data="item"></Commodity>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../my-components/app-header/app-header';
    import Footer from '../my-components/app-footer/app-footer';
    import {commodityResource} from '../../api';
    import Commodity from './components/commodity';


    export default {
        components: {
            Header,
            Footer,
            Commodity
        },
        data() {
          return {
              commodityList: []
          }
        },
        mounted() {
            commodityResource.queryAllCommodityList()
                .then(response => {
                    let {code, data} = response;
                    if (code === 0) {
                        // console.log('mall', data);
                        this.commodityList = data;

                    }
                })
        }
    }
</script>

<style>
    @import './mall.css';
    @import './mall.less';
    .params {
        font-size: 37.5px;
    }
    .box {
        width: 1rem;
        height: 1rem;
        /*background-color: #f00;*/
    }
</style>