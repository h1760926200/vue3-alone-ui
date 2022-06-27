<template>
    <div class="card-body" :style="`height: ${height}`">
        <el-input
            v-if="showInput"
            prefix-icon="el-icon-search"
            ref="select"
            v-model="queryName"
            placeholder="请输入搜索内容"
            @change="filterNodeChange"
            size="small"
            style="margin-bottom: 8px;"
        />
        <el-tree
            v-bind="$attrs"
            ref="myTree"
            :filter-node-method="filterNode"
        />
    </div>
</template>
<script>
import { reactive,toRefs,ref,onMounted, watch, defineComponent,getCurrentInstance } from 'vue'
import debounce from 'lodash/debounce'
export default defineComponent({
    name: 'MyTree',
    inheritAttrs: false,
    props: {
        filterLabel: { 
            type: String,
            default: 'label'
        },
        showInput: {
            type: Boolean,
            default: true
        },
        height: String
    },
    setup(props) { 
        const prop = toRefs(props)
        const { proxy } = getCurrentInstance();
        const state = reactive({ 
            queryName: ''
        })

        onMounted(() => { 
            // console.log(debounce);
            // filterNodeChange = debounce(val => {
            //     myTree.filter(val)
            // }, 100)
        })

        const getCheckedNodes = (leafOnly = true, includeHalfChecked = false) => { 
            return proxy?.$refs?.myTree?.getCheckedNodes(leafOnly, includeHalfChecked)
        }

        const getCheckedKeys = (leafOnly = true) => { 
            return proxy?.$refs?.myTree?.getCheckedKeys(leafOnly)
        }

        const setChecked = (idList, checked = true, deep = true) => { 
            return proxy?.$refs?.myTree?.setChecked(idList, checked, deep)
        }

        const setCheckedKeys = (idList, leafOnly = false) => { 
            proxy?.$refs?.myTree?.setCheckedKeys(idList, leafOnly)
            return getCheckedNodes()
        }

        const setCheckedNodes = (idList) => { 
            proxy?.$refs?.myTree.setCheckedNodes(idList)
        }

        const getNode = (key) => { 
            return proxy?.$refs?.myTree.getNode(key)
        }

        const filterNode = (value,data) => { 
            if (!value) return true
            return data[this.filterLabel]?.indexOf(value) !== -1
        }

        const filterNodeChange = () => { 
            
        }

        const handle = () => { 
            console.log('子组件方法被触发');
        }
        // watch(state.queryName, (newValue, oldValue) => {
        //     console.log('watch 已触发', newValue)
        // })


        return { 
            ...toRefs(state),
            getCheckedNodes,
            getCheckedKeys,
            setChecked,
            setCheckedNodes,
            setCheckedKeys,
            getNode,
            filterNode,
            filterNodeChange,
            handle
        }
    }
})
// export default {
//     inheritAttrs: false,
//     props: {
//         filterLabel: { 
//             type: String,
//             default: 'label'
//         },
//         showInput: {
//             type: Boolean,
//             default: true
//         },
//         height: String
//     },
//     setup(props) { 
//         const prop = toRefs(props)
//         const myTree = ref(null)
//         const state = reactive({ 
//             queryName: ''
//         })

//         onMounted(() => { 
//             // console.log(debounce);
//             // filterNodeChange = debounce(val => {
//             //     myTree.filter(val)
//             // }, 100)
//         })

//         const getCheckedNodes = (leafOnly = true, includeHalfChecked = false) => { 
//             return myTree?.getCheckedNodes(leafOnly, includeHalfChecked)
//         }

//         const getCheckedKeys = (leafOnly = true) => { 
//             return myTree?.getCheckedKeys(leafOnly)
//         }

//         const setChecked = (idList, checked = true, deep = true) => { 
//             return myTree?.setChecked(idList, checked, deep)
//         }

//         const setCheckedKeys = (idList, leafOnly = false) => { 
//             myTree?.setCheckedKeys(idList, leafOnly)
//             return getCheckedNodes()
//         }

//         const setCheckedNodes = (idList) => { 
//             myTree.setCheckedNodes(idList)
//         }

//         const getNode = (key) => { 
//             return myTree.getNode(key)
//         }

//         const filterNode = (value,data) => { 
//             if (!value) return true
//             return data[this.filterLabel]?.indexOf(value) !== -1
//         }

//         const filterNodeChange = () => { 
            
//         }

//         const handle = () => { 
//             console.log('子组件方法被触发');
//         }
//         // watch(state.queryName, (newValue, oldValue) => {
//         //     console.log('watch 已触发', newValue)
//         // })


//         return { 
//             ...toRefs(state),
//             getCheckedNodes,
//             getCheckedKeys,
//             setChecked,
//             setCheckedNodes,
//             setCheckedKeys,
//             getNode,
//             filterNode,
//             filterNodeChange,
//             handle
//         }
//     }
// }
</script>
<style scoped lang="scss">
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
    height: auto;
    max-height: 274px;
    padding: 0;
    overflow: hidden;
    overflow-y: auto;
}
.el-select-dropdown__item.selected {
    font-weight: normal;
}
ul li >>> .el-tree .el-tree-node__content {
    height: auto;
    padding: 0 20px;
}
.el-tree-node__label {
    font-weight: normal;
}
.el-tree >>> .is-current .el-tree-node__label {
    color: #409eff;
    font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
    color: #606266;
    font-weight: normal;
}
.selectInput {
    padding: 0 5px;
    box-sizing: border-box;
}
.treeDialog {
    width: 50%;
}
.card-body {
    height: 300px;
    overflow: hidden;
    overflow-y: scroll;
}
</style>
