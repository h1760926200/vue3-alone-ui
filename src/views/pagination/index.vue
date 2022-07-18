<template>
    <div>
        <my-pagination
            :page="formData.page"
            :page-size="formData.pageSize"
            :total="formData.total"
            :getFunc="getList"
        />
    </div>
</template>

<script>
import {  reactive, toRefs } from 'vue';
export default {
    name: 'HelloVue3Index',
    setup() { 
        const state = reactive({ 
            formData: {
                page: 1,
                pageSize: 10,
                total: 200,
            }
        })

        const getList = () => { 
            console.log('这是从页面过去的');
        }

        return{ 
            ...toRefs(state),
            getList
        }
    }
};
</script>

<style lang="scss" scoped>

</style>