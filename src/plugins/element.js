import Vue from 'vue'
import { Dialog, Pagination, Tooltip, Switch, TableColumn, Table, Row, Col, Card, BreadcrumbItem, Breadcrumb, Menu, Submenu, MenuItem, Container, Header, Aside, Main, Message, Button, Form, FormItem, Input } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)

// 挂载弹框组件
Vue.prototype.$message = Message
