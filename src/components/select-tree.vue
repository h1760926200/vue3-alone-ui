<template>
    <el-tree-select 
        :data="data" 
        multiple 
        :placeholder="placeholder || myPlaceholder"
        :value="$attrs.value"
        node-key="id"
        v-bind="$attrs"
        @check-change="getValue"
        @input="val => $emit('input', val)"
        show-checkbox/>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from 'vue-demi';
export default {
    name: 'SelectTree',
    props: { 
        data: { 
            type : Array,
            required: true
        },
        placeholder: {
            type: String,
            defalut: '请选择'
        }
    },
    setup() { 
        const { proxy } = getCurrentInstance();
        const state = reactive({ 
            myPlaceholder: ''
        })
// getHalfCheckedKeys
        const getValue = (a,b,c) => { 
            console.log(a);
            console.log(b);
        }
        const getHalfCheckedKeys = (a,b,c) => { 
            console.log(a);
            console.log(b);
        }
        return{ 
            ...toRefs(state),
            getValue
        }
    }
};
</script>

<style lang="scss" scoped>

</style>