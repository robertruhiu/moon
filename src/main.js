import Vue from 'vue'
import App from './App.vue'
import {
  Spin,
  Drawer,
  Alert,
  Avatar,
  Checkbox,
  Badge,
  Modal,
  Button,
  Tabs,
  Table,
  Card,
  Select,
  Col,
  Radio,
  Carousel,
  Form,
  Input,
  InputNumber,
  Layout,
  List,
  Popover,
  AutoComplete,
  Menu,
  Dropdown,
  Progress,
  Tag,
  DatePicker,
  Steps,
  Timeline,
  Skeleton,
  Icon,
  FormModel,
  Row, Upload, Switch, Tooltip, Affix, notification, Collapse, Empty, message,Pagination,BackTop,Breadcrumb,Popconfirm,Rate,LocaleProvider,Result,Space,Statistic


} from 'ant-design-vue';
Vue.use(Breadcrumb)

Vue.use(Alert);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(Button);
Vue.use(Card);
Vue.use(Col);
Vue.use(Popover);
Vue.use(Form);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(List);
Vue.use(Menu);
Vue.use(Tag);
Vue.use(Carousel);
Vue.use(Radio);

Vue.use(Select);
Vue.use(Checkbox);
Vue.use(Drawer)
Vue.use(AutoComplete)
Vue.use(Modal)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Dropdown)
Vue.use(Progress)
Vue.use(DatePicker)
Vue.use(Steps)
Vue.use(Timeline)
Vue.use(Skeleton)
Vue.use(Icon)
Vue.use(Spin)
Vue.use(Row)
Vue.use(Upload)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Affix)
Vue.use(Result)
Vue.use(notification)
Vue.use(Collapse)
Vue.use(Empty)
Vue.use(message)
Vue.use(Pagination)
Vue.use(BackTop)
Vue.use(Popconfirm)
Vue.use(Rate)
Vue.use(LocaleProvider)
Vue.use(Space)
Vue.use(Statistic)
Vue.use(FormModel)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
