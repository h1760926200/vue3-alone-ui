import MyButton from '@/components/my-button'
import MyRow from '@/components/my-row'
import MyCol from '@/components/my-col'
import MyLink from '@/components/my-link'
import MySelect from '@/components/my-select'
import EnumSelect from '@/components/test-select'
// import MyTree from '@/components/my-tree'
import myMenu from '@/components/my-menu'
// import myFrom from '@/components/my-form'
import myTable from '@/components/my-table'
import SelectTree from '@/components/select-tree'
import MyFilterTable from '@/components/filter-table'
import MyFilterColumn from '@/components/my-filter-column'
import MyPagination from '@/components/my-pagination'

export default {
    install (Vue) {
        Vue.component('my-button', MyButton),
        Vue.component('my-row', MyRow),
        Vue.component('my-col', MyCol),
        Vue.component('my-link', MyLink),
        Vue.component('my-select', MySelect),
        Vue.component('my-menu', myMenu),
        Vue.component('my-filter-column', MyFilterColumn),
        Vue.component('enum-select', EnumSelect),
        Vue.component('my-table', myTable),
        Vue.component('select-tree', SelectTree),
        Vue.component('my-filter-table', MyFilterTable),
        Vue.component('my-pagination', MyPagination)
    }
}