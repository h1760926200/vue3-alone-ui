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
        <div style="margin-top:50px">
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
        <div style="margin-top:50px">
            <h1>enum select事件</h1>
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
                    label="回调参数">
                </el-table-column>
            </el-table>
        </div>
        <div style="margin-top:50px">
            <h1>enum select插槽</h1>
            <el-table
                :data="slotData"
                border
                stripe
                size="large"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="插槽名">
                </el-table-column>
                <el-table-column
                    prop="remark"
                    label="说明">
                </el-table-column>
                <el-table-column
                    prop="tag"
                    label="子标签">
                </el-table-column>
            </el-table>
        </div>
        <div style="margin-top:50px">
            <h1>Option Group属性</h1>
            <el-table
                :data="attrData"
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
        <div style="margin-top:50px;margin-bottom:100px">
            <h1>Option 属性</h1>
            <el-table
                :data="optionData"
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
            {
                name: 'multiple	',
                remark: '是否多选	',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'value-key',
                remark: '作为 value 唯一标识的键名，绑定值为对象类型时必填	',
                type: 'string',
                canSelect: '—',
                select: 'value'
            },
            {
                name: 'collapse-tags',
                remark: '多选时是否将选中值按文字的形式展示	',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'collapse-tags-tooltip	',
                remark: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true	',
                type: 'true / false	',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'multiple-limit	',
                remark: 'multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制	',
                type: 'number',
                canSelect: '—',
                select: '0'
            },
            {
                name: 'name',
                remark: 'Select 输入框的原生 name 属性	',
                type: 'string',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'effect',
                remark: 'Tooltip 主题，内置了 dark / light 两种	',
                type: 'string',
                canSelect: 'string',
                select: 'light'
            },
            {
                name: 'autocomplete',
                remark: 'Select 输入框的原生 autocomplete 属性	',
                type: 'string',
                canSelect: '—',
                select: 'off'
            },
            {
                name: 'allow-create	',
                remark: '是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。	',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'filter-method	',
                remark: '自定义筛选方法	',
                type: 'function',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'remote',
                remark: '其中的选项是否从服务器远程加载	',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'remote-method	',
                remark: '自定义远程搜索方法	',
                type: 'function',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'loading',
                remark: 'Select 组件是否从远程加载数据	',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'loading-text	',
                remark: '从服务器加载内容时显示的文本	',
                type: 'string',
                canSelect: '—',
                select: 'Loading'
            },
            {
                name: 'no-match-text	',
                remark: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置	',
                type: 'string',
                canSelect: '—',
                select: 'No matching data'
            },
            {
                name: 'no-data-text	',
                remark: '无选项时显示的文字，也可以使用 empty 插槽设置自定义内容	',
                type: 'string',
                canSelect: '—',
                select: 'No data'
            },
            {
                name: 'popper-class	',
                remark: 'Select 下拉框的自定义类名	',
                type: 'string',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'reserve-keyword	',
                remark: '当 multiple 和 filter被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词	',
                type: 'boolean',
                canSelect: '—',
                select: 'true'
            },
            {
                name: 'default-first-option	',
                remark: '是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用	',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'teleported',
                remark: '是否将下拉列表插入至 body 元素	',
                type: 'boolean',
                canSelect: 'true / false	',
                select: 'true'
            },
            {
                name: 'persistent',
                remark: '当下拉选择器未被激活并且persistent设置为false，选择器会被删除。	',
                type: 'boolean',
                canSelect: 'true / false	',
                select: 'true'
            },
            {
                name: 'automatic-dropdown	',
                remark: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单	',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'clear-icon	',
                remark: '自定义清除图标组件	',
                type: 'string / Component	',
                canSelect: '—',
                select: 'CircleClose'
            },
            {
                name: 'fit-input-width	',
                remark: '下拉框的宽度是否与输入框相同	',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
            {
                name: 'suffix-icon	',
                remark: '自定义后缀图标组件	',
                type: 'string / Component	',
                canSelect: '—',
                select: 'ArrowUp'
            },
            {
                name: 'tag-type	',
                remark: '标签类型		',
                type: 'string 	',
                canSelect: 'success/info/warning/danger	',
                select: 'info'
            },
            {
                name: 'validate-event	',
                remark: '输入时是否触发表单的校验		',
                type: 'boolean',
                canSelect: '—',
                select: 'true'
            },
        ]
        const eventData = [
            {
                name: 'change',
                remark: '选中值发生变化时触发	',
                query: 'val，目前的选中值',
            },
            {
                name: 'visible-change	',
                remark: '下拉框出现/隐藏时触发	',
                query: 'val，出现则为 true，隐藏则为 false',
            },
            {
                name: 'remove-tag	',
                remark: '多选模式下移除tag时触发	',
                query: 'val，移除的tag值',
            },
            {
                name: 'clear',
                remark: '可清空的单选模式下用户点击清空按钮时触发	',
                query: '—',
            },
            {
                name: 'blur',
                remark: '当 input 失去焦点时触发	',
                query: '(event: Event)',
            },
            {
                name: 'focus',
                remark: '当 input 获得焦点时触发	',
                query: '(event: Event)',
            },
        ]
        const slotData = [
            {
                name: '—',
                remark: 'Option 组件列表	',
                tag: 'Option Group / Option'
            },
            {
                name: 'prefix',
                remark: 'Select 组件头部内容	',
                tag: '—'
            },
            {
                name: 'empty	',
                remark: '无选项时的列表	',
                tag: '—'
            },
        ]
        const attrData = [
            {
                name: 'label	',
                remark: '分组的组名	',
                type: 'string',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'disabled',
                remark: '是否将该分组下所有选项置为禁用	',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
            },
        ]
        const optionData = [
            {
                name: 'value',
                remark: '选项的值',
                type: 'string / number / boolean / object	',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'label',
                remark: '选项的标签，若不设置则默认与value相同		',
                type: 'string/number	',
                canSelect: '—',
                select: '—'
            },
            {
                name: 'disabled',
                remark: '是否禁用该选项		',
                type: 'boolean',
                canSelect: '—',
                select: 'false'
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
            data,
            eventData,
            slotData,
            attrData,
            optionData,
        })
        return { 
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>

</style>