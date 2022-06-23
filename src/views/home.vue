<template>
    <div class="home flex-center">
        欢迎使用MY UI组件库
        <img src="@/assets/logo.png" alt="">
    </div>
</template>

<script>
import { toRefs,reactive } from 'vue'
export default {
    name: 'home',
    setup() { 
        const state = reactive({ 
        })

        return { 
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>
.home{ 
    font-size: 50px;
    font-weight: 800;
}
</style>