<template>
    <tabbar slot="bottom">
        <tabbar-item @on-item-click="change" v-for="(item, index) in tabbarData" :key="index" :link="item.link" :selected="index === current ? true : false">
            <img slot="icon" :src="item.icon" />
            <img slot="icon-active" :src="item.icon_active" />
            <span slot="label">{{ item.label }}</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux';
    export default {
        components: {
            Tabbar,
            TabbarItem
        },
       data() {
           return {
               tabbarData: [
                   {label: '首页', link: '/home', icon: 'data/image/home-icon.png', icon_active: 'data/image/home-icon-active.png'},
                   {label: '商城', link: '/mall', icon: 'data/image/mall-icon.png', icon_active: 'data/image/mall-icon-active.png'},
                   {label: '我的', link: '/mine', icon: 'data/image/mine-icon.png', icon_active: 'data/image/mine-icon-active.png'}
               ]
           }
       },
        computed: {
            current() {
                console.log("route", this.$route);
                if (this.$route.fullPath.indexOf('/home') > -1) {
                    return 0;
                } else if (this.$route.fullPath.indexOf('/mall') > -1) {
                    return 1;
                } else if (this.$route.fullPath.indexOf('/mine') > -1) {
                    return 2;
                }
            }
        },
        mounted() {
            /*console.log("route", this.$route);*/
        },
        methods: {
            change(num, e) {
                console.log("e", e)
                return false;
//                console.log("num", num)
            }
        }
    }
</script>

<style lang="less">
    .weui-tabbar {
        background-color: #fff;
    } 
</style>