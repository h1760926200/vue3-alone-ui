<template>
    <div class="pagination" :style="`text-align: ${textAlign};`">
        <el-pagination
            @size-change="val => $emit('updatePage', 'pageSize', val)"
            @current-change="val => $emit('updatePage', 'page', val)"
            :current-page="page"
            :page-sizes="pageSizeList"
            :page-size="pageSize"
            :layout="layout"
            :total="total"
        />
    </div>
</template>

<script>
export default {
    name: 'my-pagination',
    props: {
        total: {
            type: Number,
            default: 0
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
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
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