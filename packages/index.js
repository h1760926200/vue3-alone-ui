import myButton from '@/components/my-button'
import myCol from '@/components/my-col'
import myForm from '@/components/my-form'
import menuItem from '@/components/menu-item'
import myLink from '@/components/my-link'
import myRow from '@/components/my-row'
import mySelect from '@/components/my-select'
import myTree from '@/components/my-tree'
import myTable from '@/components/my-table'
const components = [
    myButton,
    myCol,
    myForm,
    menuItem,
    myLink,
    myRow,
    myTree,
    mySelect,
    myTable,
]

const install = (Vue) => { 
    components.forEach(component => { 
        Vue.component(component.name,component)
    })
    if(typeof window !== 'undefined' && window.Vue){ 
        install(window.Vue)
    }
}

export default {
    install,
    ...components
}