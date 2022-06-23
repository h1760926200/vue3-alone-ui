import MyButton from '@/components/my-button'
import MyRow from '@/components/my-row'
import MyCol from '@/components/my-col'
import MyLink from '@/components/my-link'
import MySelect from '@/components/my-select'
// import MyTree from '@/components/my-tree'
import myMenu from '@/components/my-menu'
import myFrom from '@/components/my-form'
import myTable from '@/components/my-table'

export default {
    install (Vue) {
        Vue.component('my-button', MyButton),
        Vue.component('my-row', MyRow),
        Vue.component('my-col', MyCol),
        Vue.component('my-link', MyLink),
        Vue.component('my-select', MySelect),
        Vue.component('my-menu', myMenu),
        Vue.component('my-form', myFrom),
        Vue.component('my-table', myTable)
        // Vue.component('my-tree', MyTree)
    }
}