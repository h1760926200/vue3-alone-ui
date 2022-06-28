<template>
    <div>
        <h1>二次封装Element-ui Select选择框</h1>
        <test-select
            v-model="value"
            :enum="enumObj">
        </test-select>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue-demi';
export default {
    name: 'HelloVue3Index',
    setup() { 
        const state = reactive({ 
            enumObj: { 
                0: '亲亲',
                1: '问问',
                2: '呃呃',
                3: '让人',
                4: '挺痛',
            },
            value: ''
        })

        return { 
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>

</style>