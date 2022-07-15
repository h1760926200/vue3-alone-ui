<template>
    <div>
        <my-pagination
            :page="page"
            :page-size="pageSize"
            :total="total"
            @updatePage="Page"
        />
    </div>
</template>

<script>
import { usePage } from '@/utils/page'
import { reactive, toRefs } from 'vue-demi';
const [pageData, setPage] = usePage()
export default {
    setup() { 
        const state = reactive({ 
            ...pageData,
        })
        const Page = (type,val) => { 
            etPage(type, val, this, getList)
        }
        const getList = () =>  { 

        }
        return{ 
            ...toRefs(state),
            getList,
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