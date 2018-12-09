import axios from './config';

export default {
    // 获取所有商品列表
    queryAllCommodityList: function() {
        return axios.get("/data/commodityList.json");
    },
    // 获取对应的商品所有图片
    queryOneCommodityInfo: function (id) {
        return axios.get("/data/commodityDetailImages.json");
    }
}