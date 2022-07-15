<template>
    <div>
        <el-dropdown
            trigger="click"
            class="icon"
            :hide-on-click="false"
        >
            <slot class="icon"></slot>
            <!-- <el-icon class="el-icon--right icon"></el-icon> -->
            <!-- <i class="el-icon--right" title="过滤表格列"></i> -->
            <template #dropdown>
                <el-dropdown-menu >
                    <div class="options">
                        <el-button
                            @click="selectAll"
                            title="全部选中"
                        >
                            全选
                        </el-button>
                    </div>
                    <el-dropdown-item
                        v-for="item in Object.values(this.columnList)"
                        :key="item.label"
                    >
                        <el-checkbox
                            :label="item.label"
                            v-model="item.show"
                            @change="handleChange"
                        />
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue-demi'
import { useRouter } from 'vue-router'
export default {
    props: {
        columnList: {
            type: Object,
            default: () => ({})
        }
    },
    name: 'my-filter-column',
    setup(props) { 
        const date = toRefs(props)
        const router = useRouter()
        const state = reactive({
            getColumnList: date.columnList.value
        })

        onMounted(() => { 
            // handleChange()
            // selectAll()
        })

        const handleChange = () => {
            let path = router.currentRoute
            let filterCol = localStorage.filterColumn ? JSON.parse(localStorage.filterColumn) : {}
            filterCol[path] = date.columnList.value
            localStorage.filterColumn = JSON.stringify(filterCol)
        }

        const selectAll = () => {
            for (let key in date.columnList.value) {
                if (date.columnList.value[key].show) continue
                date.columnList.value[key].show = true
            }
        }

        return{
            ...toRefs(state),
            handleChange,
            selectAll
        }
    },
}
</script>

<style scoped lang="scss">
.options{
    margin-top: -8px;
    display: flex;
    justify-content: center;
}
.icon{
    float: right;
    cursor: pointer;
    padding-bottom: 10px;
}
</style>