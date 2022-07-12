<template>
    <div>
        <my-filter-column
            :column-list="tableColumn"
        >{{filterName}}</my-filter-column>
        <el-table
            :data="data"
            border
            stripe
            :header-cell-style="{textAlign: 'center'}"
            :cell-style="{ textAlign: 'center' }"
            style="width: 100%">
            <template v-for="(item) in col">
                <el-table-column
                    :key="item.prop"
                    v-if="setKey(`${item.label}`, `${item.prop}`)"
                    :prop="item.prop"
                    :label="item.label"
                >
                </el-table-column>
            </template>
        </el-table>

    </div>
</template>
<script>
import { reactive, toRefs, computed } from 'vue-demi';
export default {
    name: 'HelloVue3FilterTable',
    props: {
        data: {
            type: Array,
            default: [],
            required: true
        },
        col: { 
            type: Array,
            default: [],
        },
        filterName: {
            type: String,
            default: '过滤表格列'
        }
    },
    setup(props) {
        const setKey = computed(() => {
            return (label, key) => {
                // if ( key !== 'options') return state.tableColumn[key] = label
                if (state.tableColumn[key] && 'show' in state.tableColumn[key]) return state.tableColumn[key].show
                state.tableColumn[key] = {
                    label,
                    show: true
                }
                return true
            }
        })

        const state = reactive({
            tableColumn: {}
        })

        return{
            ...toRefs(state),
            setKey
        }
    }
};
</script>

<style lang="scss" scoped>
.a { 
    background: red;
    .b{
        background: black;
    }
}
</style>