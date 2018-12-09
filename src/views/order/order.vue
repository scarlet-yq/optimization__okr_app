<template>
    <div class="order">
        <Header title="我的订单" :left="true" :isabsolute="true"></Header>
        <!--<x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">-->
            <!--<thead>-->
                <!--<tr style="background-color: #F7F7F7">-->
                    <!--<th>订单号</th>-->
                    <!--<th>状态</th>-->
                    <!--<th>价值</th>-->
                    <!--<th>时间</th>-->
                <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
                <!--<tr v-for="(item, index) in userOrderPage.orderList" :key="index">-->
                    <!--<td>{{ item.orderNo }}</td>-->
                    <!--<td>{{ item.statusText }}</td>-->
                    <!--<td>{{ item.worth }}</td>-->
                    <!--<td>{{ item.time }}</td>-->
                <!--</tr>-->
            <!--</tbody>-->
        <!--</x-table>-->
        <div class="table-wrap">
            <x-table :cell-bordered="false" :content-bordered="false"  style="width:100%;margin: 0 auto;border-left: 1px solid #d2e4f0;border-right: 1px solid #d2e4f0;overflow:hidden;background-color:#fff;border-radius:10px; border-collapse:separate;">
                <thead>
                <tr style="background-color: #d9f6e5;color:#44d381;font-size: 14px;">
                    <th>订单号</th>
                    <th>状态</th>
                    <th>价值</th>
                    <th>时间</th>
                </tr>
                </thead>
                <tbody style="color:#666;">
                <tr  v-for="(item, index) in userOrderPage.orderList" :key="index">
                    <td>{{ item.orderNo }}</td>
                    <td>{{ item.statusText }}</td>
                    <td>{{ item.worth }}</td>
                    <td>{{ item.time }}</td>
                </tr>
                </tbody>
            </x-table>
        </div>
        <Page :total="userOrderPage.total" :current-page="userOrderPage.current" :display="userOrderPage.display"  @pagechange="pagechange"></Page>
        <Footer></Footer>
    </div>
</template>

<script>
    import { userResource } from '../../api';
    import Page from '../my-components/page/page';
    import { XTable, XHeader } from 'vux';
    import Header from '../my-components/app-header/app-header';
    import Footer from '../my-components/app-footer/app-footer';

    export default {
        components: {
            XTable,
            Page,
            Header,
            Footer
        },
        data() {
          return {
              userOrderPage: {}
          }
        },
        mounted() {
            this.pagechange(1);
        },
        methods: {
            pagechange:function(currentPage){
                let { id } = this.$route.query;
                userResource.getTotalOrderInfo(
                    id,
                    currentPage,
                    10
                ).then(response => {
                    let {code, data} = response;
                    if (code === 0) {
                        this.userOrderPage = data;
                    }
                })
                // console.log(currentPage);
                // ajax请求, 向后台发送 currentPage, 来获取对应的数据

            }
        }
    }
</script>

<style lang="less" scoped>
    .table-wrap {
        background-color: #f5f5f5;
        padding:30px 20px;
        border-radius: 18px;
    }
</style>