<template>
    <div>
        <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%;margin-top:50px">
            <el-table-column
                prop="id"
                label="id"
                key="id"
                v-if="setKey('id', 'id')"
                width="width">
            </el-table-column>
            <el-table-column
                prop="name"
                v-if="setKey('姓名', 'name')"
                key="name"
                label="姓名"
                width="width">
            </el-table-column>
            <el-table-column
                prop="age"
                v-if="setKey('年龄', 'age')"
                key="age"
                label="年龄"
                width="width">
            </el-table-column>
            <el-table-column
                v-if="setKey('爱好', 'hobby')"
                prop="hobby"
                key="hobby"
                label="爱好"
                width="width">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'HelloVue3Index',

    data() {
        return {
            tableData: [
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
            ],
            tableColumn: {},
        };
    },
    computed: {
        setKey() {
            return (label, key) => {
                if (this.tableColumn[key] && 'show' in this.tableColumn[key]) return this.tableColumn[key].show
                this.tableColumn[key] = {
                    label,
                    show: true
                }
                return true
            }
        }
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>