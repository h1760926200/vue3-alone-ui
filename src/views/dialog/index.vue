<template>
    <div>
        <my-link @click="showDialog">点击显示对话框</my-link>
        <el-dialog
            title="可拖拽"
            v-model="dialogVisible"
            draggable
            width="30%"
            :before-close="dialogBeforeClose">
            <div></div>
            <template #footer>
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import { defineComponent,reactive,toRefs } from 'vue'
export default defineComponent({
    setup() { 
        const state = reactive({
            dialogVisible: false
        })

        const showDialog = () => { 
            state.dialogVisible = true
        }

        const dialogBeforeClose = () => { 
            state.dialogVisible = false
        }

        return { 
            ...toRefs(state),
            showDialog,
            dialogBeforeClose,
        }
    }
})
</script>

<style lang="scss" scoped>

</style>