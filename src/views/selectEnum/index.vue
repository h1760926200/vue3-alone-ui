<template>
    <div>
        <h1>二次封装Element-ui Select选择框</h1>
        <div class="layout">
            <my-row>
                <my-select
                    type="enum"
                    v-model="value"
                    class="select"
                    enum-name="testEnum">
                </my-select>
            </my-row>
            <div class="footer">
                <div class="trotion">
                    enum.js文件
                </div>
                <div v-text="'export const testEnum = { '" class="html" style="margin-top:10px"></div>
                <div v-text="`&nbsp; &nbsp;0: '测测',`" class="html"></div>
                <div v-text="`&nbsp; &nbsp;1: '亲亲',`" class="html"></div>
                <div v-text="`&nbsp; &nbsp;2: '喔喔',`" class="html"></div>
                <div v-text="`&nbsp; &nbsp;3: '呃呃',`" class="html"></div>
                <div v-text="`&nbsp; &nbsp;4: '让人',`" class="html"></div>
                <div v-text="`}`" class="html"></div>
                <div class="trotion">
                    封装select template部分
                </div>
                <div class="html" style="margin-top:10px">
                    &lt el-select <br>
                        &nbsp; filterable<br>
                        &nbsp; clearable<br>
                        &nbsp; :placeholder="placeholder || myPlaceholder"<br>
                        &nbsp; :value="$attrs.value"<br>
                        &nbsp; ref="mySelect"<br>
                        &nbsp; v-bind="$attrs"<br>
                        &nbsp; @input="val => $emit('input', val)"<br>
                    ><br>
                        &lt slot> &lt /slot><br>
                        &nbsp; &lt el-option<br>
                            &nbsp; v-for="item in options"<br>
                            &nbsp; :key="item[type === 'enum' ? 'v' : kv.split(':')[1]]"<br>
                            &nbsp; :label="getLabel(item)"<br>
                            &nbsp; :value="getValue(item)"<br>
                        ><br>
                            &lt template v-if="renderFormat"><br>
                                &nbsp; &lt span v-html="renderFormat(item)">&lt /span><br>
                            &lt /template><br>
                        &nbsp; &lt /el-option><br>
                    &lt /el-select>
                </div>
            </div>
            <div class="trotion">
                封装select js部分
            </div>
            <div class="html" style="margin-top:10px" >
                import * as enumSource from '@/until/enum'<br>
                import { reactive,toRefs,computed,onMounted } from 'vue'<br>
                // 拼音作为键
                const dataType = {}<br>
                export default {<br>
                    name: 'HelloVue3MySelect',<br>
                    props: { <br>
                        type: { <br>
                            type: String,<br>
                            default: ''<br>
                        },<br>
                        placeholder: { <br>
                            type: String,<br>
                            default: '请选择'<br>
                        },<br>
                        enumName: String,<br>
                        valueIsLabel: {<br>
                            type: Boolean,<br>
                            default: false<br>
                        },<br>
                        renderFormat: Function,<br>
                    },<br>
                    setup(props) { <br>
                        const data = toRefs(props)<br>
                        const state = reactive({ <br>
                            options: [],<br>
                            kv: 'label:id'<br>
                        })<br>
                        onMounted(() => { <br>
                            get()<br>
                        })<br>

                        const getLabel = (val) => { <br>
                            return val[data.type.value === 'enum' ? 'k' : state.kv.split(':')[0]]<br>
                        }<br>

                        const getValue = (val) => { <br>
                            if (data.valueIsLabel.value) return getLabel(val)<br>
                            return val[data.type.value === 'enum' ? 'v' : state.kv.split(':')[1]]<br>
                        }<br>

                        const get = () => { <br>
                            if(data.type.value === 'enum'){ <br>
                                return state.options = enumSource[data.enumName.value] ?  _getKV(enumSource[data.enumName.value]) : []<br>
                            }<br>
                            state.kv = kv || 'label:id'<br>
                            // const [fn, msg, kv] = dataType[this.type]<br>
                        }<br>

                        const _getKV = (val) => {<br>
                            if (val.sort) {<br>
                                // eslint-disable-next-line no-unused-vars<br>
                                const { sort, ...res } = val<br>
                                return Object.values(res).map(val => {<br>
                                    const [k, v] = val.split('=')<br>
                                    return { k, v: Number(v) }<br>
                                })<br>
                            }<br>
                            return Object.entries(val).map(([k, v]) => ({ k: v, v: Number(k) }))<br>
                        }<br>

                        return { <br>
                            ...toRefs(state),<br>
                            getLabel,<br>
                            getValue<br>
                        }<br>
                    }<br>
                };
            </div>
        </div>

    </div>
</template>

<script>
import { reactive,toRefs,computed,onMounted } from 'vue'
export default {
    name: 'HelloVue3Index',
    setup() { 
        const state = reactive({ 
            value: '',
            options: []
        })

        return { 
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>
.select{ 
    width: 220px;
}
.layout{ 
    border: 1px solid #ebebeb;
    padding: 40px;
    height: auto;
}
</style>