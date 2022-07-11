<template>
    <div>
        <h1>二次封装Element-ui Select选择框</h1>
        <enum-select
            v-model="value"
            clearble
            :enum="enumObj">
        </enum-select>
        <div class="footer" style="margin-top:10px">
            <!-- <div class="trotion">
                使用type、round、size、disabled属性来定义 Button 的样式。
            </div> -->
            <div class="html">
                &ltenum-select<br>
                    &nbsp;&nbsp;v-model="value"<br>
                    &nbsp;&nbsp;:enum="enumObj"><br>
                &lt/enum-select><br><br><br>
                value: ''<br>
                enumObj: { <br>
                    &nbsp;&nbsp;0: '亲亲',<br>
                    &nbsp;&nbsp;1: '问问',<br>
                    &nbsp;&nbsp;2: '呃呃',<br>
                    &nbsp;&nbsp;3: '让人',<br>
                    &nbsp;&nbsp;4: '挺痛',<br>
                },<br>
            </div>
        </div>
        <div style="margin-top:200px">
            <h1>enum select属性</h1>
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
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue-demi';
export default {
    name: 'HelloVue3Index',
    setup() { 
        const data = [
            {
                name: 'model-value / v-model',
                remark: '选中项绑定值',
                type: 'string / number / boolean / object',
                canSelect: '—',
                select: '—'
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
        const state = reactive({ 
            enumObj: { 
                0: '亲亲',
                1: '问问',
                2: '呃呃',
                3: '让人',
                4: '挺痛',
            },
            value: '',
            data
        })
        
        return { 
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>

</style>