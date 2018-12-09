<template>
    <div>
        <OkrProgress></OkrProgress>
        <Header title="OKR系统" :left="false" :isabsolute="true"></Header>
        <LatestGoods></LatestGoods>
        <MyIntegral></MyIntegral>
        <ConversionRecord></ConversionRecord>
        <Footer></Footer>
    </div>
</template>

<script>
    import LatestGoods from './components/latestGoods';
    import MyIntegral from './components/myIntegral';
    import ConversionRecord from './components/conversionRecord';
    import OkrProgress from './components/okr-progress';
    import Header from '../my-components/app-header/app-header';
    import Footer from '../my-components/app-footer/app-footer';

    export default {
        components: {
            Header,
            Footer,
            LatestGoods,
            MyIntegral,
            ConversionRecord,
            OkrProgress
        },
        mounted() {
//            console.log(this.$route.path);
        }
    }
</script>

<style>

</style>