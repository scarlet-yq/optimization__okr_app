<template>
    <div class="image-preview">
        <swiper  style="width:100%; margin:0 auto;" :aspect-ratio="270/270"  :list="imageList"  dots-position="center"></swiper>
        <!--<img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="show(index)">-->
        <!--<div v-transfer-dom>
            <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
        </div>-->
    </div>
</template>

<script>
    import { Swiper} from 'vux';

    export default {
        components: {
            Swiper
        },
        props: ["imageList"],
        methods: {

        }
    }
</script>

<style lang="less">

</style>