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
            :key="item[type === 'enum' ? 'v' : kv.split(':')[1]]"
            :label="getLabel(item)"
            :value="getValue(item)"
        >
            <template v-if="renderFormat">
                <span v-html="renderFormat(item)"></span>
            </template>
        </el-option>
    </el-select>
</template>

<script>
import * as enumSource from '@/until/enum'
import { reactive,toRefs,computed,onMounted } from 'vue'
// 拼音作为键
const dataType = {}
export default {
    name: 'HelloVue3MySelect',
    props: { 
        type: { 
            type: String,
            default: ''
        },
        placeholder: { 
            type: String,
            default: '请选择'
        },
        enumName: String,
        valueIsLabel: {
            type: Boolean,
            default: false
        },
        renderFormat: Function,
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

        const getLabel = (val) => { 
            return val[data.type.value === 'enum' ? 'k' : state.kv.split(':')[0]]
        }

        const getValue = (val) => { 
            if (data.valueIsLabel.value) return getLabel(val)
            return val[data.type.value === 'enum' ? 'v' : state.kv.split(':')[1]]
        }

        const get = () => { 
            if(data.type.value === 'enum'){ 
                return state.options = enumSource[data.enumName.value] ?  _getKV(enumSource[data.enumName.value]) : []
            }
            state.kv = kv || 'label:id'
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
            getLabel,
            getValue
        }
    }
};
</script>

<style lang="scss" scoped>
</style>