<template>
    <div class="header">
        <div class="flex-algin-center">
            <img src="@/assets/logo.png" alt="">
            <span class="span">My UI</span>
            <input type="text" class="my-input ipt" placeholder="搜索">
            <div v-for="val in list" :key="val" class="flex-align-center box">
                {{val}}
            </div>
            <select class="my-select">
                <option value ="volvo">中文</option>
                <option value ="saab">English</option>
            </select>
        </div>
    </div>
</template>

<script>
import { toRefs,reactive } from 'vue'
export default {
    name: 'HelloVue3Header',
    setup() { 
        const state = reactive({ 
            list: ['指南','主题','资源']
        })

        return { 
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>
.header{ 
    // box-shadow: 15px 0 35px #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100%;
    text-align: center;
}
.span{
    color: #000000d9;
    font-weight: 700;
    font-size: 18px;
    padding-left: 15px;
    padding-right: 15px;
}
.box{ 
    width: 100px;
}
.ipt{ 
    margin-right: 40px;
}
</style>