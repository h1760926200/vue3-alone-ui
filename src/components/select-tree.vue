<template>
    <el-tree-select 
        :data="data" 
        multiple 
        :placeholder="placeholder || myPlaceholder"
        :value="$attrs.value"
        node-key="id"
        @node-click="nodeClick"
        class="select"
        v-bind="$attrs"
        :clearable="clearable"
        @clear="clearSelect"
        @input="val => $emit('input', val)">
            <template v-slot="{node,data}">
                <span class="custom-tree-node">
                    <div style="display:flex;align-items:center">
                        <el-checkbox v-model="data.checked" style="height:0;padding-right:5px" @change="changeFlag"></el-checkbox>
                        <span :class="data.checked ? 'active' : ''">{{ `${data.label}` }}</span>
                    </div>
                </span>
            </template>
    </el-tree-select>
</template>

<script>
import { computed, getCurrentInstance, onMounted, reactive, toRefs, defineEmits, watch } from 'vue-demi';
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
        },
        clearable: { 
            type: Boolean,
            defalut: false
        }
    },
    setup(props,{emit}) { 
        const data = toRefs(props)
        const { proxy } = getCurrentInstance();
        const state = reactive({ 
            myPlaceholder: '',
            idList: []
        })
        onMounted(() => { 
            initData()
        })
        const initData = () => { 
            for(let val of data.data.value) { 
                val.checked = false
                if(val.children){
                    for(let val1 of val.children){ 
                        val1.checked = false
                        if(val1.children){ 
                            for(let val2 of val1.children){
                                val2.checked = false
                            }
                        }
                    }
                }
            }
        }
        const nodeClick = (a) => { 
            a.checked = !a.checked
            if(a.checked) { 
                state.idList.push(a.id)
            }else{ 
                let idx = state.idList.findIndex(val => { 
                    return val === a.id
                })
                state.idList.splice(idx,1)
            }
            console.log(state.idList);
            emit('input',state.idList)
        }
        const clearSelect = () => { 
            state.idList = []
            for(let val of data.data.value) { 
                val.checked = false
                if(val.children){
                    for(let val1 of val.children){ 
                        val1.checked = false
                        if(val1.children){ 
                            for(let val2 of val1.children){
                                val2.checked = false
                            }
                        }
                    }
                }
            }
            emit('input',state.idList)
        }
        const changeFlag = (e) => { 
            console.log(e);
        }
        return{ 
            ...toRefs(state),
            nodeClick,
            clearSelect,
            changeFlag
        }
    }
};
</script>

<style lang="scss" scoped>
.select{ 
    .active{
        color: #409eff;
        font-weight: 700;
    }
}
</style>
<style lang="scss" >
    .el-select-dropdown__item.selected::after{
        display: none;
    }
    .el-select-dropdown__item.selected{
        color: #606266;
    }
</style>