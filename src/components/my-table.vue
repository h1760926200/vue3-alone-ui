<template>
    <el-table
        :data="data"
        border
        stripe
        ref="dragTable"
        style="width: 100%">
        <el-table-column
            show-overflow-tooltip 
            v-for="(item, index) in col"
            :key="index"
            :prop="col[index].prop"
            :label="item.label"
        >
        </el-table-column>
    </el-table>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'MyTable',
    props: { 
        data: { 
            type: Array,
            default: [],
            required: true
        },
        col: { 
            type: Array,
            default: [],
            required: true
        }
    },
    setup() { 
        const state = reactive({ 

        })
    }
};
</script>

<style lang="scss" scoped>

</style>