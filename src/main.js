import Vue from "vue";
import {
  Button, Container, Main, Header,
  Aside, Menu, Submenu, MenuItem,
  Dropdown, DropdownMenu, DropdownItem, Row,
  Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem,
  Tag, Form, FormItem, Input, Select, Option, Switch, DatePicker,
  Dialog,Pagination,MessageBox,Message
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import './assets/less/index.less'
import store from './store'
import http from 'axios'
import '../api/mock'

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Pagination);

Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

// 导航守卫
router.beforeEach((to, from, next) => {
  // 防止也买你刷新之后vuex丢失token信息
  store.commit('getToken')
  const token = store.state.user.token
  // token不存在，且不在登录页
  if (!token && to.name !== 'login') {
    // 进入登录页
    next({ name:'login'})
  } else if (token && to.name === 'login') {
    next({name:'home'})
  }
  else {
    next()
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    store.commit('addMenu',router)
  }
}).$mount("#app");
