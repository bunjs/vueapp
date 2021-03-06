import Vue from 'vue';
import Vuex from 'vuex';
import actions from './config/actions';
import state from './config/state';
import mutations from './config/mutations';
Vue.use(Vuex);
// 可以用module拆分store，暂时不需要
export default new Vuex.Store({ actions, mutations, state, plugins: [] });
// export default new Vuex.Store({ ...config });
