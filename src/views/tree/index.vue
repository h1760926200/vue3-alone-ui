<template>
    <div>
        <h1>二次封装Element-ui selectTree下拉多选树形</h1>
        <!-- <my-tree
            :data="driverData"></my-tree> -->
        <select-tree
            :data="driverData"
            v-model="test"
            filterable
            clearable
            collapse-tags-tooltip
            collapse-tags
            @input="getValue"
            >
            </select-tree>
            <div class="footer" style="margin-top:10px">
                <div class="html">
                    &ltselect-tree<br>
                        &nbsp;&nbsp;:data="driverData"<br>
                        &nbsp;&nbsp;v-model="test"<br>
                        &nbsp;&nbsp;filterable<br>
                        &nbsp;&nbsp;clearable<br>
                        &nbsp;&nbsp;collapse-tags-tooltip<br>
                        &nbsp;&nbsp;collapse-tags<br>
                        &nbsp;&nbsp;@input="getValue"<br>
                        &nbsp;&nbsp;><br>
                    &lt/select-tree><br>
                </div>
            </div>
            <div style="margin-top:200px">
                <h1>Tree属性</h1>
                <el-table
                    :data="data"
                    border
                    stripe
                    size="large"
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="属性">
                    </el-table-column>
                    <el-table-column
                        prop="remark"
                        label="说明">
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="类型">
                    </el-table-column>
                    <el-table-column
                        prop="canSelect"
                        label="可选值">
                    </el-table-column>
                    <el-table-column
                        prop="select"
                        label="默认值">
                    </el-table-column>
                </el-table>
            </div>
            <!-- <el-button type="primary" @click="showData">确定</el-button> -->
    </div>
</template>

<script>
import { reactive,toRefs,ref,defineComponent,getCurrentInstance } from 'vue'
export default defineComponent({
    setup() { 
        const { proxy } = getCurrentInstance();
        const data = [
            {
                name: 'model-value / v-model',
                remark: '选中项绑定值',
                type: 'string / number / boolean / object',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'data',
                remark: '展示数据',
                type: 'array',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'empty-text',
                remark: '内容为空的时候展示的文本',
                type: 'string',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'node-key',
                remark: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
                type: 'object',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'props',
                remark: '',
                type: 'array',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'load',
                remark: '加载子树数据的方法，仅当 lazy 属性为true 时生效',
                type: 'function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'default-expand-all',
                remark: '是否默认展开所有节点',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'highlight-current',
                remark: '是否高亮当前选中节点，默认值是 false。',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'expand-on-click-node',
                remark: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
                type: 'boolean',
                canSelect: '—',
                select: 'true'
            },
            {
                name: 'auto-expand-parent',
                remark: '展开子节点的时候是否自动展开父节点',
                type: 'boolean',
                canSelect: '—',
                select: 'true'
            },
            {
                name: 'default-expanded-keys',
                remark: '默认展开的节点的 key 的数组',
                type: 'array',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'accordion',
                remark: '是否每次只打开一个同级树节点展开',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'icon',
                remark: '自定义图标组件',
                type: 'string / Component',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'lazy',
                remark: '是否懒加载子节点，需与 load 方法结合使用',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'disabled',
                remark: '是否禁用',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'size',
                remark: '输入框尺寸',
                type: 'string',
                canSelect: 'large/default/small',
                select: 'default'
            },
            {
                name: 'clearable',
                remark: '是否可以清空选项',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'filterable',
                remark: 'Select 组件是否可筛选',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'loading',
                remark: 'Select 组件是否从远程加载数据',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'loading-text',
                remark: '从服务器加载内容时显示的文本',
                type: 'string',
                canSelect: '—',
                select: 'Loading'
            },
            {
                name: 'no-match-text',
                remark: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置',
                type: 'string',
                canSelect: '—',
                select: 'No matching data'
            },
            {
                name: 'no-data-text',
                remark: '无选项时显示的文字，也可以使用 empty 插槽设置自定义内容',
                type: 'string',
                canSelect: '—',
                select: 'No data'
            },
            {
                name: 'popper-class',
                remark: 'Select 下拉框的自定义类名',
                type: 'string',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'suffix-icon',
                remark: '自定义后缀图标组件',
                type: 'string / Component',
                canSelect: '—',
                select: 'ArrowUp'
            },
            {
                name: 'placeholder',
                remark: '占位文字',
                type: 'string',
                canSelect: '—',
                select: 'Select'
            },
        ]
        // const childFormRef: any = ref<InstanceType<typeof Child>>()
        const state = reactive({ 
            query: '',
            treeList: [],
            driverData: [
                {
                    id: 1,
                    label: 'Level one 1',
                    children: [
                    {
                        id: 4,
                        label: 'Level two 1-1',
                        children: [
                        {
                            id: 9,
                            label: 'Level three 1-1-1',
                        },
                        {
                            id: 10,
                            label: 'Level three 1-1-2',
                        },
                        ],
                    },
                    ],
                },
                {
                    id: 2,
                    label: 'Level one 2',
                    children: [
                    {
                        id: 5,
                        label: 'Level two 2-1',
                    },
                    {
                        id: 6,
                        label: 'Level two 2-2',
                    },
                    ],
                },
                {
                    id: 3,
                    label: 'Level one 3',
                    children: [
                    {
                        id: 7,
                        label: 'Level two 3-1',
                    },
                    {
                        id: 8,
                        label: 'Level two 3-2',
                    },
                    ],
                },
            ],
            test: [],
            data
        })
        const getValue = (a) => { 
            state.test = []
            state.test = a
        }
        const handleCheck = (refName) => { 
            state.treeList[refName] = proxy?.$refs?.driverTree?.getCheckedNodes()
        }
        const append = (data) => { 
            const newChild = { id: id++, label: 'testtest', children: [] }
            if (!data.children) {
                data.children = []
            }
            data.children.push(newChild)
            state.driverData.value = [...state.driverData.value]
        }
        const showData = () => { 
            console.log(state.test);
        }
        return{ 
            ...toRefs(state),
            handleCheck,
            getValue,
            append,
            showData
        }
    }
});
</script>

<style lang="scss" scoped>

</style>