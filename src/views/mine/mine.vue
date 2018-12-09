<template>
    <div class="mine">
        <Header title="OKR系统" :left="false"  :isabsolute="true"></Header>
        <div class="minewrap">
            <div class="userInfo">
                <div class="useicon">
                    <router-link :to="{
                    path: '/mine/personalInformation',
                    query: {id: userInfo.id}
                }"  class="usersetting">
                        <img src="/data/image/icon-setting.png" alt="" />
                    </router-link>
                    <span class="notice">
                    <img src="/data/image/icon-notice.png" alt="" />
                </span>
                </div>
                <img class="headportrait" :src="userInfo.headPortrait" alt="" />
                <p class="username">{{ userInfo.username }}</p>
                <p class="rank">职级：{{ userInfo.rank }}</p>
                <p class="email">邮箱：{{ userInfo.email }}</p>
            </div>
            <card class="userRelativeAction">
                <div slot="content" class="card-demo-flex card-demo-content01">
                    <div>
                        <span>{{ userInfo.attentionNum }}</span>
                        <br/>
                        关注
                    </div>
                    <div>
                        <span>{{ userInfo.biddersRecordNum }}</span>
                        <br/>
                        竞拍记录
                    </div>
                    <div>
                        <span>{{ userInfo.newsNum }}</span>
                        <br/>
                        消息
                    </div>
                    <div>
                        <span>12</span>
                        <br/>
                        足迹
                    </div>
                </div>
            </card>
            <card class="userRelativeInfo">
                <group gutter="0" slot="header" >
                    <cell :border-intent="false" class="myorder" title="我的订单" value="查看全部订单" is-link :link="{
                        path: '/mine/order',
                        query: {
                            id: userInfo.id
                        }
                    }"></cell>
                </group>
                <div slot="content" class="card-padding card-demo-flex card-demo-content01">
                    <div>
                        <span>{{ userInfo.availableIntegral }}</span>
                        <br/>
                        可用积分
                    </div>
                    <div>
                        <span>{{ userInfo.usedIntegral }}</span>
                        <br/>
                        使用积分
                    </div>
                    <div>
                        <span>{{ userInfo.totalIntegral }}</span>
                        <br/>
                        总计积分
                    </div>
                    <router-link tag="div" :to="{
                    path: '/mine/myInintegral',
                    query: {
                        id: userInfo.id
                    }
                }">
                        <span>我的积分</span>
                        <br/>
                        我的积分
                    </router-link>

                </div>
                <group  gutter="0"  slot="footer" >
                    <cell :border-intent="false" title="关于OKR"  is-link link="/mine/aboutokr"></cell>
                </group>
            </card>
            <x-button class="signout">退出登录</x-button>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../my-components/app-header/app-header';
    import Footer from '../my-components/app-footer/app-footer';
    import {userResource} from '../../api';
    import { Card,Group, Cell, XButton } from 'vux';

    export default {
        data() {
            return {
                userInfo: {}
            }
        },
        components: {
            Header,
            Footer,
            Card,
            Cell,
            Group,
            XButton
        },
        mounted() {
            userResource.getUserInfo()
                .then(response => {
                    let {code, data} = response;
                    if (code === 0) {
                        this.userInfo = data;
                    }
                })
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/1px.less';
    @import './mine.less';
</style>
