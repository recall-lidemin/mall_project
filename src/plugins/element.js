import Vue from 'vue'
import { Message, Button, Form, FormItem, Input } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 挂载弹框组件
Vue.prototype.$message = Message
