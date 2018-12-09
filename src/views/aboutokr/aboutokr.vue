<template>
    <div class="aboutokr">
        <Header title="" :left="true" :isabsolute="true"></Header>
        <div class="aboutokr">
            <h3>OKR概述</h3>
            <p  v-for="(item, index) in okrSummary.summary" :key="index">{{item}}</p>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import { userResource } from '../../api';
    import Header from '../my-components/app-header/app-header';
    import Footer from '../my-components/app-footer/app-footer';

    export default {
        components: {
            Header,
            Footer
        },
        data() {
          return {
             okrSummary: {}
          }
        },
        mounted() {
            userResource.getOkrSummary()
                .then(response => {
                    let { code, data } = response;
                    if (code === 0) {
                        this.okrSummary = data;
                    }
                });
        }
    }
</script>

<style lang="less">
    @import './aboutokr.less';
</style>