<template>
    <div class="pagination" :style="`text-align: ${textAlign};`">
        <el-pagination
            @size-change="val => Page('pageSize', val)"
            @current-change="val => Page('page', val)"
            :current-page="page"
            :page-sizes="pageSizeList"
            :page-size="pageSize"
            :layout="layout"
            :total="total"
        />
    </div>
</template>

<script>
import { usePage } from '@/until/page'
import { defineComponent, getCurrentInstance, reactive, toRefs } from 'vue';
const [pageData, setPage] = usePage()
export default {
    name: 'my-pagination',
    props: {
        total: {
            type: Number,
            default: 200
        },
        page: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 10
        },
        pageSizeList: {
            type: Array,
            default: () => [10, 30, 50]
        },
        layout: {
            type: String,
            default: 'prev, pager, next, jumper, total, sizes'
        },
        textAlign: {
            type: String,
            default: 'left'
        },
        getFunc: { 
            type: Function,
        }
    },
    setup() { 
        const state = reactive({ 

        })

        const { proxy } = getCurrentInstance()
        const _this = proxy
        const Page = (type,val) => {
            setPage(type, val, _this, getList)
        }

        const getList = () =>  { 
            console.log('这是从组件来的');
        }
        return{ 
            ...toRefs(state),
            Page
        }
    }
};
</script>

<style lang="scss" scoped>
    .pagination{
        margin-top: 15px;
        /deep/ .el-pagination__jump{
            margin: 0 10px;
        }
    }
</style>