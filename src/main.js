import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

import _public from './until/public'
import packages from '../packages/index'
import { 
    ElSelect,
    ElOption,
    ElInput,
    ElTree,
    ElButton,
    ElDialog,
    ElSubMenu,
    ElMenu,
    ElMenuItem,
    ElTable,
    ElTableColumn,
    ElCalendar,
    ElContainer,
    ElAside,
    ElMain,
    ElTreeSelect,
    ElCheckbox
} from 'element-plus';
import 'element-plus/dist/index.css'
createApp(App)
.use(ElOption)
.use(ElSelect)
.use(ElInput)
.use(ElButton)
.use(ElTree)
.use(ElDialog)
.use(ElMenu)
.use(ElMenuItem)
.use(ElSubMenu)
.use(ElTable)
.use(ElTableColumn)
.use(ElCalendar)
.use(ElContainer)
.use(ElAside)
.use(ElMain)
.use(ElTreeSelect)
.use(ElCheckbox)
.use(_public)
.use(router) 
.use(packages) 
.mount('#app')