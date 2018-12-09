<template>
  <div id="app">
      <view-box ref="viewBox" class="viewbox">
          <router-view></router-view>
      </view-box>
      <!--<AppFooter></AppFooter>-->
  </div>
</template>

<script>
  import {  ViewBox } from 'vux';
//  import AppHeader from './views/my-components/app-header/app-header';
//  import AppFooter from './views/my-components/app-footer/app-footer';

  export default {
    components: {
        ViewBox,
//        AppHeader,
//        AppFooter
    },
    mounted() {
    }
  }
</script>

<style lang="less">
  @import './assets/styles/reset.css';
  @import '~@/assets/icons/iconfont.css';
    html,
    body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
    #app {
        height: 100%;
    }
    .weui-tab__panel {
        padding-top: 46PX;
    }
</style>