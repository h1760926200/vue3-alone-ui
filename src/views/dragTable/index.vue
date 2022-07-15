<template>
    <div>
        <h1>可拖拽的Table表格</h1>
        <!-- <my-table :data="data" :col="tableCol" drag >
        </my-table> -->
        <my-table :data="data" :col="tableCol" drag >
            <template v-slot="{prop}">
                <span>{{prop}}</span>
            </template>
        </my-table>
        <div style="margin-top:150px">
            <h1>drag table属性</h1>
            <el-table
                :data="tableData"
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
        <div style="margin-top:50px">
            <h1>tree table event事件</h1>
            <el-table
                :data="eventData"
                border
                stripe
                size="large"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="事件名">
                </el-table-column>
                <el-table-column
                    prop="remark"
                    label="说明">
                </el-table-column>
                <el-table-column
                    prop="query"
                    label="参数">
                </el-table-column>
            </el-table>
        </div>
        <div style="margin-top:50px">
            <h1>tree table methods事件</h1>
            <el-table
                :data="methodsData"
                border
                stripe
                size="large"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="事件名">
                </el-table-column>
                <el-table-column
                    prop="remark"
                    label="说明">
                </el-table-column>
                <el-table-column
                    prop="query"
                    label="参数">
                </el-table-column>
            </el-table>
        </div>
        <div style="margin-top:50px;margin-bottom:100px">
            <h1>tree table slot</h1>
            <el-table
                :data="slotData"
                border
                stripe
                size="large"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="name">
                </el-table-column>
                <el-table-column
                    prop="remark"
                    label="说明">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive,toRefs } from 'vue'
export default {
    name: 'HelloVue3Index',
    setup() { 
        const data = [
            { 
                id: 0,
                name: '亲亲',
                age: 10,
                hobby: '问问'
            },
            { 
                id: 1,
                name: '呃呃',
                age: 11,
                hobby: '让人'
            },
            { 
                id: 2,
                name: '一样',
                age: 12,
                hobby: 'uu'
            },
            { 
                id: 3,
                name: 'ii',
                age: 13,
                hobby: '哦哦',
            },
        ]
        const tableCol = [
            {
                label: "id",
                prop: "id",
            },
            {
                label: "姓名",
                prop: "name"
            },
            {
                label: "年龄",
                prop: "age"
            },
            {
                label: "爱好",
                prop: "hobby"
            },
        ]
        const tableData = [
            {
                name: 'data',
                remark: '显示的数据',
                type: 'array',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'col',
                remark: '表格列',
                type: 'array',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'drag',
                remark: '是否可拖拽',
                type: 'boolean',
                canSelect: '—',
                select: 'false',
            },
            {
                name: 'height',
                remark: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
                type: 'string/number',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'max-height',
                remark: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度。',
                type: 'string/number',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'stripe',
                remark: '是否为斑马纹 table',
                type: 'boolean',
                canSelect: '—',
                select: 'false',
            },
            {
                name: 'border',
                remark: '是否带有纵向边框',
                type: 'boolean',
                canSelect: '—',
                select: 'false',
            },
            {
                name: 'size',
                remark: 'Table 的尺寸',
                type: 'string',
                canSelect: 'medium / small / mini',
                select: '—',
            },
            {
                name: 'fit',
                remark: '列的宽度是否自撑开',
                type: 'boolean',
                canSelect: '—',
                select: 'true',
            },
            {
                name: 'show-header',
                remark: '是否显示表头',
                type: 'boolean',
                canSelect: '—',
                select: 'true',
            },
            {
                name: 'highlight-current-row',
                remark: '是否要高亮当前行',
                type: 'boolean',
                canSelect: '—',
                select: 'false',
            },
            {
                name: 'current-row-key',
                remark: '当前行的 key，只写属性',
                type: 'String,Number',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'row-class-name',
                remark: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
                type: 'Function({row, rowIndex})/String',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'row-style',
                remark: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
                type: 'Function({row, rowIndex})/Object',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'cell-class-name',
                remark: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
                type: 'Function({row, column, rowIndex, columnIndex})/String',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'cell-style',
                remark: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
                type: 'Function({row, column, rowIndex, columnIndex})/Object',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'header-row-class-name',
                remark: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
                type: 'Function({row, rowIndex})/String',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'header-row-style',
                remark: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
                type: 'Function({row, rowIndex})/Object',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'header-cell-class-name',
                remark: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
                type: 'Function({row, column, rowIndex, columnIndex})/String',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'header-cell-style',
                remark: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
                type: 'Function({row, column, rowIndex, columnIndex})/Object',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'row-key',
                remark: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。',
                type: 'Function(row)/String',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'empty-text',
                remark: '空数据时显示的文本内容，也可以通过 slot="empty" 设置',
                type: 'String',
                canSelect: '—',
                select: '暂无数据',
            },
            {
                name: 'default-expand-all',
                remark: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
                type: 'Boolean',
                canSelect: '—',
                select: 'false',
            },
            {
                name: 'expand-row-keys',
                remark: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。	',
                type: 'array',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'default-sort',
                remark: '默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序	',
                type: 'Object',
                canSelect: 'order: ascending, descending	',
                select: '如果只指定了prop, 没有指定order, 则默认顺序是ascending',
            },
            {
                name: 'tooltip-effect	',
                remark: 'tooltip effect 属性	',
                type: 'String',
                canSelect: 'dark/light	',
                select: '—',
            },
            {
                name: 'show-summary	',
                remark: '是否在表尾显示合计行	',
                type: 'Boolean',
                canSelect: '—',
                select: 'false',
            },
            {
                name: 'sum-text	',
                remark: '合计行第一列的文本	',
                type: 'String',
                canSelect: '—',
                select: '合计',
            },
            {
                name: 'summary-method	',
                remark: '自定义的合计计算方法	',
                type: 'Function({ columns, data })	',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'span-method	',
                remark: '合并行或列的计算方法	',
                type: 'Function({ row, column, rowIndex, columnIndex })	',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'select-on-indeterminate	',
                remark: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行	',
                type: 'Boolean',
                canSelect: '—',
                select: 'true',
            },
            {
                name: 'indent',
                remark: '展示树形数据时，树节点的缩进	',
                type: 'Number',
                canSelect: '—',
                select: '16',
            },
            {
                name: 'lazy',
                remark: '是否懒加载子节点数据	',
                type: 'Boolean',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'load',
                remark: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息	',
                type: 'Function(row, treeNode, resolve)	',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'tree-props	',
                remark: '渲染嵌套数据的配置选项	',
                type: 'Object',
                canSelect: '—',
                select: "{ hasChildren: 'hasChildren', children: 'children' }",
            },
        ]
        const eventData = [
            {
                name: 'select',
                remark: '当用户手动勾选数据行的 Checkbox 时触发的事件',
                query: 'selection, row',
            },
            {
                name: 'select-all',
                remark: '当用户手动勾选全选 Checkbox 时触发的事件	',
                query: 'selection',
            },
            {
                name: 'selection-change	',
                remark: '当选择项发生变化时会触发该事件	',
                query: 'selection',
            },
            {
                name: 'cell-mouse-enter	',
                remark: '当单元格 hover 进入时会触发该事件	',
                query: 'row, column, cell, event',
            },
            {
                name: 'cell-mouse-leave',
                remark: '当单元格 hover 退出时会触发该事件	',
                query: 'row, column, cell, event',
            },
            {
                name: 'cell-click	',
                remark: '当某个单元格被点击时会触发该事件	',
                query: 'row, column, cell, event',
            },
            {
                name: 'cell-dblclick	',
                remark: '当某个单元格被双击击时会触发该事件	',
                query: 'row, column, cell, event',
            },
            {
                name: 'row-click	',
                remark: '当某一行被点击时会触发该事件	',
                query: 'row, column, event',
            },
            {
                name: 'row-contextmenu	',
                remark: '当某一行被鼠标右键点击时会触发该事件	',
                query: 'row, column, event',
            },
            {
                name: 'row-dblclick	',
                remark: '当某一行被双击时会触发该事件	',
                query: 'row, column, event',
            },
            {
                name: 'header-click	',
                remark: '当某一列的表头被点击时会触发该事件	',
                query: 'column, event',
            },
            {
                name: 'header-contextmenu	',
                remark: '当某一列的表头被鼠标右键点击时触发该事件	',
                query: 'column, event',
            },
            {
                name: 'sort-change	',
                remark: '当表格的排序条件发生变化的时候会触发该事件	',
                query: "{ column, prop, order }",
            },
            {
                name: 'filter-change	',
                remark: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。	',
                query: 'filters',
            },
            {
                name: 'current-change	',
                remark: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性	',
                query: 'currentRow, oldCurrentRow',
            },
            {
                name: 'header-dragend	',
                remark: '当拖动表头改变了列的宽度的时候会触发该事件	',
                query: 'newWidth, oldWidth, column, event',
            },
            {
                name: 'expand-change	',
                remark: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）	',
                query: 'row, (expandedRows | expanded)',
            },
            {
                name: 'onEnd',
                remark: '拖拽结束',
                query: 'event',
            },
            {
                name: 'onStart',
                remark: '开始拖拽',
                query: 'event',
            },
            {
                name: 'onChoose',
                remark: '元素被选中',
                query: 'event',
            },
            {
                name: 'onUnchoose',
                remark: '元素未被选中的时候（从选中到未选中）',
                query: 'event',
            },
            {
                name: 'onAdd',
                remark: '元素从一个列表拖拽到另一个列表',
                query: 'event',
            },
            {
                name: 'onUpdate',
                remark: '列表内元素顺序更新的时候触发',
                query: 'event',
            },
            {
                name: 'onSort',
                remark: '列表的任何更改都会触发',
                query: 'event',
            },
            {
                name: 'onRemove',
                remark: '元素从列表中移除进入另一个列表',
                query: 'event',
            },
            {
                name: 'onMove',
                remark: '拖拽移动的时候',
                query: 'event, originalEvent',
            },
            {
                name: 'onClone',
                remark: 'clone一个元素的时候触发',
                query: 'event',
            },
            {
                name: 'onFilter',
                remark: '试图拖拽一个filtered的元素',
                query: 'event',
            },
            {
                name: 'onChange',
                remark: '拖拽元素改变位置的时候',
                query: 'array',
            },
        ]
        const methodsData = [
            {
                name: 'clearSelection',
                remark: '用于多选表格，清空用户的选择	',
                query: '—',
            },
            {
                name: 'toggleRowSelection',
                remark: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）	',
                query: 'row, selected',
            },
            {
                name: 'toggleAllSelection',
                remark: '用于多选表格，切换所有行的选中状态	',
                query: '—',
            },
            {
                name: 'toggleRowExpansion',
                remark: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）	',
                query: 'row, expanded',
            },
            {
                name: 'setCurrentRow',
                remark: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。	',
                query: 'row',
            },
            {
                name: 'clearSort',
                remark: '用于清空排序条件，数据会恢复成未排序的状态	',
                query: '—',
            },
            {
                name: 'doLayout',
                remark: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法	',
                query: '—',
            },
            {
                name: 'sort',
                remark: '手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。	',
                query: 'prop: string, order: string',
            },
        ]
        const slotData = [
            {
                name: 'append',
                remark: '插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。'
            },
            {
                name: 'tableColumn',
                remark: ''
            },
        ]
        const state = reactive({ 
            data,
            tableCol,
            tableData,
            eventData,
            methodsData,
            slotData,
        })

        onMounted(() => { 

        })

        return { 
            ...toRefs(state),
        }
    }
};
</script>

<style lang="scss" scoped>

</style>