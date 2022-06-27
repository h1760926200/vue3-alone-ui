<template>
    <button 
        :type="type" 
        :class="className" 
        class="btn" 
        :round="round">
        <slot></slot>
    </button>
</template>
    
<script>
    import { reactive, onMounted, toRefs,computed } from 'vue'
    export default {
        name: 'MyButton',
        props: { 
            type: { 
                type: String,
                default: ''
            },
            round: { 
                type: Boolean,
                default: false
            },
            disabled: { 
                type: Boolean,
                default: false
            },
            size: { 
                type: Boolean,
                default: 'normal'
            },
        },
        setup(props) { 
            const data = toRefs(props)

            const state = reactive({ 
                className : computed(() => { 
                    return  `my-button-${data.type.value} ${data.round.value ? 'is-round' : ''}`+
                            `${data.disabled.value ? `my-button-${data.type.value}-is-disabled `: '' }` +
                            getName()
                 }),
            })


            onMounted(() => { 
                console.log(data);
            })

            const getName = () => { 
                if(data.size.value === 'normal') return 'btn-normal'
                if(data.size.value === 'large') return 'btn-large'
                if(data.size.value === 'small') return 'btn-small'
                if(data.size.value === 'medium') return 'btn-medium'
            }
            return { 
                ...toRefs(state),
            }
        }
    }
</script>
    
<style  scoped lang="scss">
.btn{
    display: inline-block;
    line-height: 1;
    height: 40px;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.btn+.btn{ 
    margin-left: 10px;
}
.my-button-primary{ 
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.my-button-danger{ 
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
}
.my-button-info{ 
    color: #fff;
    background-color: #909399;
    border-color: #909399;
}
.my-button-success{ 
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
}
.is-round{ 
    border-radius: 20px;
    padding: 12px 23px;
}
.my-button-primary-is-disabled{ 
    cursor: not-allowed;
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.my-button-danger-is-disabled{ 
    cursor: not-allowed;
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}
.my-button-info-is-disabled{ 
    cursor: not-allowed;
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.my-button-success-is-disabled{ 
    cursor: not-allowed;
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.my-button--is-disabled{ 
    cursor: not-allowed;
    color: #c0c4cc;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
// height: 40px;  padding: 12px 20px; font-size: 14px;
.btn-large{ 
    height: 56px;
    padding: 14px 38px;
    font-size: 18px;
}
.btn-small{ 
    height: 30px;
    padding: 5px 15px;
    font-size: 10px;
}
.btn-medium{ 
    height: 34px;
    padding: 8px 16px;
    font-size: 12px;
}
</style>
    