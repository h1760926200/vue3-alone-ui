<template>
    <a
        :class="className"
        class="link"
        :href="href"
        >
        <slot></slot>
    </a>
</template>

<script>
import { reactive, toRefs,computed } from 'vue'
export default {
    name: 'HelloVue3MyLink',
    props: { 
        type: { 
            type: String,
            default: ''
        },
        disabled: { 
            type: Boolean,
            default: false
        },
        href: { 
            type: String,
            default: 'javascript:void(0)'
        },
    },
    setup(props) {
        const data = toRefs(props)
        const state = reactive({
            className: computed(() => { 
                return  ` my-link-${data.type.value} ` + ` ${data.disabled.value ? `my-link-${data.type.value}-is-disabled` : ''} `
            }),
        })
        return{ 
            ...toRefs(state),
        }
    }
};
</script>

<style lang="scss" scoped>
.link{ 
    text-decoration: none;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    color: #606266;
}
.link+.link{ 
    margin-left: 10px;
}
.my-link-primary{
    color: #409eff;
}
.my-link-danger{
    color: #f56c6c;
}
.my-link-info{
    color: #909399;
}
.my-link-warning{
    color: #e6a23c;
}
.my-link-success{
    color: #67c23a;
}
.my-link-warning-is-disabled{ 
    cursor: not-allowed;
    color: #f3d19e;
}

.my-link-primary-is-disabled{ 
    cursor: not-allowed;
    color: #a0cfff;
}
.my-link-danger-is-disabled{ 
    cursor: not-allowed;
    color: #fab6b6;
}
.my-link-info-is-disabled{ 
    cursor: not-allowed;
    // pointer-events:none;
    color: #c8c9cc;
}
.my-link-success-is-disabled{ 
    cursor: not-allowed;
    color: #b3e19d;
}
.my-link--is-disabled{ 
    cursor: not-allowed;
    color: #c0c4cc;
}
</style>