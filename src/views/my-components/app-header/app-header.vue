<template>
    <x-header :left-options="{showBack: left, backText: ''}" :title="title"  :style="{'background-color': color || '#48d484'}" :class="{'headerabsolute': isabsolute}"></x-header>
</template>

<script>
    import {XHeader} from 'vux';
    export default {
        props: ['title','left', 'isabsolute', 'color'],
        components: {
            XHeader
        }
    }
</script>

<style lang="less">
    .headerabsolute {
        width: 100%;
        position: absolute !important;
        z-index: 1000;
        left: 0;
        top: 0;
    }
    .vux-header .vux-header-left .left-arrow:before {
        border-color: #fff !important;
        border-width: 2PX 0 0 2PX !important;
    }
    .vux-header-title-area, .vux-header .vux-header-title {
        color: #fff !important;
    }
</style>