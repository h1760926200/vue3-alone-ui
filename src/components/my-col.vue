<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>

<script>
import { reactive,toRefs,computed } from 'vue'
export default {
    name: 'HelloVue3MyCol',
    props: { 
        span: { 
            type: Number,
            default: 24
        }
    },
    setup(props) { 
        const { span } = toRefs(props)
        const state = reactive({ 
            className: computed(() => { 
                if(span.value === 24) return 'my-col-24'
                if(span.value === 12) return 'my-col-12'
                if(span.value === 8) return 'my-col-8'
                if(span.value === 6) return 'my-col-6'
                if(span.value === 4) return 'my-col-4'
                if(span.value === 3) return 'my-col-3'
            })
        })

        return { 
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>
.my-col-24{ 
    width: 100%;
    border-radius: 4px;
}
.my-col-12{ 
    width: 50%;
    border-radius: 4px;
}
.my-col-8{ 
    border-radius: 4px;
    width: calc(100% / 3);
}
.my-col-6{ 
    border-radius: 4px;
    width: 25%;
}
.my-col-4{ 
    border-radius: 4px;
    width: calc(100% / 6);
}
.my-col-3{ 
    border-radius: 4px;
    width: 12.5%;
}
</style>