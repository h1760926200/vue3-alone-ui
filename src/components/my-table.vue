<template>
    <el-table
        :data="data"
        border
        ref="dragTable"
        style="width: 100%">
        <el-table-column
            prop="id"
            label="id">
        </el-table-column>
        <el-table-column
            prop="name"
            label="name">
        </el-table-column>
        <el-table-column
            prop="age"
            label="age">
        </el-table-column>
        <el-table-column
            prop="hobby"
            label="hobby">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: 'HelloVue3MyTable',
    props: { 
        data: { 
            type: Array,
            default: [],
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>

</style>