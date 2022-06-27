<template>
    <el-select
        filterable
        clearable
        :placeholder="placeholder || myPlaceholder"
        :value="$attrs.value"
        ref="mySelect"
        v-bind="$attrs"
        @input="val => $emit('input', val)"
    >
        <slot></slot>
        <el-option
            v-for="item in options"
            :key="item['v']"
            :label="item['k']"
            :value="item['v']"
        >
            <template v-if="renderFormat">
                <span v-html="renderFormat(item)"></span>
            </template>
        </el-option>
    </el-select>
</template>

<script>
// import * as enumSource from '@/until/enum'
import { reactive,toRefs,onMounted } from 'vue'
// 拼音作为键
const dataType = {}
export default {
    name: 'EnumSelect',
    props: { 
        placeholder: { 
            type: String,
            default: '请选择'
        },
        valueIsLabel: {
            type: Boolean,
            default: false
        },
        renderFormat: Function,
        enum: { 
            type: Object,
            default: {},
            required: true,
        }
    },
    setup(props) { 
        const data = toRefs(props)
        const state = reactive({ 
            options: [],
            kv: 'label:id'
        })

        onMounted(() => { 
            get()
        })

        const get = () => { 
            state.options = _getKV(data.enum.value)
            // if(data.type.value === 'enum'){ 
                // state.options = enumSource[data.enumName.value] ?  _getKV(enumSource[data.enumName.value]) : []
            // }
            // state.kv = kv || 'label:id'
            // const [fn, msg, kv] = dataType[this.type]
        }

        const _getKV = (val) => {
            if (val.sort) {
                // eslint-disable-next-line no-unused-vars
                const { sort, ...res } = val
                return Object.values(res).map(val => {
                    const [k, v] = val.split('=')
                    return { k, v: Number(v) }
                })
            }
            return Object.entries(val).map(([k, v]) => ({ k: v, v: Number(k) }))
        }

        return { 
            ...toRefs(state),
        }
    }
};
</script>

<style lang="scss" scoped>
</style>