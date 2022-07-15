<template>
    <div>
        <h1>封装递归展开树</h1>
        <div style="margin-bottom:20px">
            <my-menu :data="list" background-color="" text-color=""></my-menu>
        </div>
        <div class="footer">
            <!-- <div class="trotion">

            </div> -->
            <div>
                <div v-text="`<my-menu :data='list'></my-menu>`" class="html"></div>
                <div v-text="'export default {'" class="html"></div>
                <div v-text="`&nbsp; &nbsp; setup() {`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; &nbsp;const state = reactive({`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; &nbsp; &nbsp;list: []`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; &nbsp;})`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; &nbsp;return {`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; &nbsp; &nbsp;...toRefs(state),`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; &nbsp;}`" class="html"></div>
                <div v-text="`}`" class="html"></div>
            </div>
        </div>
        <div style="margin-top:50px;margin-bottom:100px">
            <h1>tree menu属性</h1>
            <el-table
                :data="data"
                border
                stripe
                size="large"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="属性">
                </el-table-column>
                <el-table-column
                    prop="remark"
                    label="说明">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="类型">
                </el-table-column>
                <el-table-column
                    prop="canSelect"
                    label="可选值">
                </el-table-column>
                <el-table-column
                    prop="select"
                    label="默认值">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue-demi';
export default {
    name: 'HelloVue3Index',
    setup() { 
        const list =  
            [
                {
                    path: '/open_tree',
                    meta: {
                    title: '八大菜系介绍'
                    }
                },
                {
                    path: '/open_tree',
                    meta: {
                    title: '鲁菜'
                    },
                    children: [
                    {
                        path: 'open_tree',
                        meta: {
                        title: '发展历史'
                        },
                        children: [
                        {
                            path: 'open_tree',
                            meta: {
                            title: '秦汉时期'
                            }
                        },
                        {
                            path: 'open_tree',
                            meta: {
                            title: '北魏时期'
                            }
                        }
                        ]
                    },
                    {
                        path: 'open_tree',
                        meta: {
                        title: '风味特色'
                        }
                    }
                    ]
                },
                {
                    path: '/open_tree',
                    meta: {
                    title: '川菜'
                    },
                    children: [
                    {
                        path: 'open_tree',
                        meta: {
                        title: '川菜概论'
                        }
                    },
                    {
                        path: 'open_tree',
                        meta: {
                        title: '发展历史'
                        }
                    }
                    ]
                },
        ]
        const data = [
            {
                name: 'data',
                remark: '显示的数据',
                type: 'array',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'background-color',
                remark: '菜单的背景颜色',
                type: 'string',
                canSelect: '—',
                select: '#ffffff',
            },
            {
                name: 'text-color',
                remark: '菜单的文字颜色',
                type: 'string',
                canSelect: '—',
                select: '#303133',
            },
        ]
        const state = reactive({
            list,
            data
        })
        return{
            ...toRefs(state),
        }
    }
};
</script>

<style lang="scss" scoped>

</style>