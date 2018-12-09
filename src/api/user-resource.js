import axios from './config';
// import axios from 'axios';

export default {
    // 获取用户信息
    getUserInfo: function () {
        return axios.get('/data/user.json')
    },
    // 获取用户个人信息
    getPersonalInformation: function(id) {
        return axios.get("/data/personalInformation.json");
    },
    // 获取用户所有订单信息
    getTotalOrderInfo: function (id, page = 1, size = 10) {
        return axios.get("/data/order.json");
    },
    // 获取积分明细列表
    getIntegralDetailList: function (id) {
        return axios.get("/data/integralDetail.json");
    },
    // 获取okr概述
    getOkrSummary: function () {
        return axios.get("/data/okrSummary.json");
    }
}
