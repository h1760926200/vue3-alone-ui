<template>
    <div>
        <h1>二次封装element-ui table</h1>
        <my-filter-table
            :data="tableData"
            filterName="过滤"
            :col="tableColunm">
        </my-filter-table>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue-demi';
export default {
    name: 'HelloVue3Index',
    setup() { 
        const tableData = [
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
        const tableColunm = [
            {
                label: "id",
                prop: "id",
                show: true
            },
            {
                label: "姓名",
                prop: "name",
                show: true
            },
            {
                label: "年龄",
                prop: "age",
                show: true
            },
            {
                label: "爱好",
                prop: "hobby",
                show: true
            },
        ]

        const state = reactive({
            tableData,
            tableColunm
        })

        return { 
            ...toRefs(state),
        }
    }
};
</script>

<style lang="scss" scoped>

</style>