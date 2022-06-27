<template>
    <div>
        <h1>可拖拽的Table表格</h1>
        <my-table :data="tableData" :col="tableCol">
        </my-table>
    </div>
</template>

<script>
import { onMounted, reactive,toRefs } from 'vue'
import Sortable from 'sortablejs'
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
                hobby: '哦哦'
            },
        ]
        const tableCol = [
            {
                label: "id",
                prop: "id"
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
        const state = reactive({ 
            tableData,
            tableCol
        })

        onMounted(() => { 
            const tbody = document.querySelector(".el-table__body-wrapper tbody");
            Sortable.create(tbody);
        })

        return { 
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>

</style>