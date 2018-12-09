<template>
    <div class="personalInfo">
        <Header title="个人信息" :left="true"  :isabsolute="true"></Header>
        <group gutter="0" class="group">
            <div class="avatar">
                <span>头像</span>
                <img :src="userInfo.avatar" alt="" />
            </div>
            <cell :border-intent="false" title="姓名" :value="userInfo.name" is-link></cell>
            <cell :border-intent="false" title="性别" :value="userInfo.sex" is-link></cell>
            <cell :border-intent="false" title="邮箱" :value="userInfo.email" is-link></cell>
            <cell :border-intent="false" title="手机号" :value="userInfo.tel" is-link></cell>
            <cell :border-intent="false" title="职级" :value="userInfo.rank" is-link></cell>
            <cell :border-intent="false" title="办公地址" :value="userInfo.officeaddress" is-link></cell>
            <cell :border-intent="false" title="生日" :value="userInfo.birth" is-link></cell>
        </group>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../my-components/app-header/app-header';
    import Footer from '../my-components/app-footer/app-footer';
    import { userResource } from '../../api';
    import { XHeader, Group, Cell, CellBox} from 'vux';

    export default {
        components: {
            Header,
            Footer,
            Group,
            Cell,
            CellBox
        },
        data() {
          return {
              userInfo: {}
          }
        },
        mounted() {
            let { id } = this.$route.query;
            userResource.getPersonalInformation(id)
                .then(response => {
                    let {code, data} = response;
                    if (code === 0) {
                        this.userInfo = data;
//                        console.log("getPersonalInformation", data)
                    }
                })
//            console.log("id", this.$route.query.id)
        }
    }
</script>

<style lang="less">
    @import './personalInformation.less';
</style>