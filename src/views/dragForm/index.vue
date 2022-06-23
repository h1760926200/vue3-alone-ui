<template>
    <div>
        <h1>可拖拽的Form表单</h1>
        <div style="width:500px">
            <el-form 
                ref="form" 
                :model="formData" 
                label-width="80px">
                <el-form-item label="第一项">
                    <el-input v-model="formData.a"></el-input>
                </el-form-item>
                <el-form-item label="第二项">
                    <el-input v-model="formData.b"></el-input>
                </el-form-item>
                <el-form-item label="第三项">
                    <el-radio-group v-model="formData.c">
                        <el-radio label="1">是</el-radio>
                        <el-radio label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="第四项">
                    <el-select v-model="formData.d" placeholder="placeholder">
                        <el-option v-for="item in 10" :key="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="第五项">
                    <el-input v-model="formData.e"></el-input>
                </el-form-item>
                <el-form-item label="第六项">
                    <el-input v-model="formData.f"></el-input>
                </el-form-item>
                <el-form-item label="第七项">
                    <el-input v-model="formData.g"></el-input>
                </el-form-item>
                <el-form-item label="第八项">
                    <el-input v-model="formData.h"></el-input>
                </el-form-item>
                <el-form-item label="第九项">
                    <el-input v-model="formData.i"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'HelloVue3Index',
    setup() { 
        const state = reactive({ 
            formData: {}
        })

        return{ 
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>

</style>