import { reqCategoryList } from "@/api";
//state:仓库存储数据的地方
const state = {
    categoryList: [],
};

//actions：处理action，可以书写自己的业务逻辑，也可处理异步
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        console.log("result:\n", result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
};

//mutations:修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};

//理解为计算属性，用于简化仓库数据库，让组件获取仓库的数据更加方便
const getters = {};

//对外暴露Store类的一个实例
export default {
    state,
    mutations,
    actions,
    getters
}