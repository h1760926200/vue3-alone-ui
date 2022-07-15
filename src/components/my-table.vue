<template>
    <el-table
        :data="data"
        border
        stripe
        row-key="id"
        @sortChange="clickCell"
        style="width: 100%">
        <template v-if="drag">
            <slot name="tableColumn"></slot>
            <el-table-column
                show-overflow-tooltip 
                v-for="(item, index) in col"
                :key="index"
                :class="'table-colunm'+ index"
                :prop="col[index].prop"
                :label="item.label"
            >
            <template #[item.prop]="{ row }">
                <slot :name="row.prop" :col="row">{{row}}</slot>
            </template>
            </el-table-column>
        </template>
        <template v-else>
            <slot name="tableColumn"></slot>
            <el-table-column
                show-overflow-tooltip 
                v-for="(item, index) in col"
                :key="index"
                :class="'table-colunm'+ index"
                :prop="item.prop"
                :label="item.label"
            >
            </el-table-column>
        </template>
    </el-table>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import Sortable from 'sortablejs'
export default {
    name: 'MyTable',
    props: { 
        data: { 
            type: Array,
            default: [],
            required: true
        },
        col: { 
            type: Array,
            default: [],
        },
        drag: { 
            type: Boolean,
            default: false,
        },
        sortChange: Function,
    },
    setup(prop,{emit}) { 
        const data = toRefs(prop)
        const state = reactive({ 

        })
        const clickCell = () => { 
            console.log(123);
        }
        onMounted(() => { 
            if(data.drag.value){ 
                const tbody = document.querySelector(".el-table__body-wrapper tbody");
                Sortable.create(tbody, { 
                    // 拖拽结束
                    onEnd(e){ 
                        emit('onEnd',e)
                    },
                    // 开始拖拽
                    onStart(e){ 
                        emit('onStart',e)
                    },
                    // 元素被选中
                    onChoose(e){ 
                        emit('onChoose',e)
                    },
                    // 元素未被选中的时候（从选中到未选中）
                    onUnchoose(e){ 
                        emit('onUnchoose',e)
                    },
                    // 元素从一个列表拖拽到另一个列表
                    onAdd(e){ 
                        emit('onAdd',e)
                    },
                    // 列表内元素顺序更新的时候触发
                    onUpdate(e){ 
                        emit('onUpdate',e)
                    },
                    // 列表的任何更改都会触发
                    onSort(e){ 
                        emit('onSort',e)
                    },
                    // 元素从列表中移除进入另一个列表
                    onRemove(e){ 
                        emit('onRemove',e)
                    },
                    // 拖拽移动的时候
                    onMove(e,originalEvent){ 
                        emit('onMove',e,originalEvent)
                    },
                    // clone一个元素的时候触发
                    onClone(e){ 
                        emit('onClone',e)
                    },
                    // 试图拖拽一个filtered的元素
                    onFilter(e){ 
                        emit('onFilter',e)
                    },
                    // 拖拽元素改变位置的时候
                    onChange(e){ 
                        emit('onChange',e)
                    },
                });
            }
        })

        return { 
            ...toRefs(state),
            clickCell
        }
    }
};
</script>

<style lang="scss" scoped>

</style>