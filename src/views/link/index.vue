<template>
    <div>
        <h1>Link文字链接</h1>
        <div class="layout">
            <my-row>
                <my-link>默认Link</my-link>
                <my-link type="primary" href="#">主要连接</my-link>
                <my-link type="success" href="#">成功连接</my-link>
                <my-link type="danger" href="#">危险连接</my-link>
                <my-link type="info" href="#">信息连接</my-link>
                <my-link type="warning" href="#">警告连接</my-link>
            </my-row>
            <my-row class="top">
                <my-link disabled>禁用Link</my-link>
                <my-link type="primary" disabled>主要连接</my-link>
                <my-link type="success" disabled>成功连接</my-link>
                <my-link type="danger" disabled>危险连接</my-link>
                <my-link type="info" disabled>信息连接</my-link>
                <my-link type="warning" disabled>警告连接</my-link>
            </my-row>
        </div>
        <div class="footer">
            <!-- <div class="trotion">

            </div> -->
            <div>
                <div v-text="'<my-row>'" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link href='#'>默认Link</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='primary' href='#'>主要连接</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='success' href='#'>成功连接</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='danger' href='#'>危险连接</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='info' href='#'>信息连接</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='warning' href='#'>警告连接</my-link>`" class="html"></div>
                <div v-text="'</my-row>'" class="html"></div>
                <div v-text="'<my-row>'" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link disabled>禁用Link</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='primary' disabled>主要连接</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='success' disabled>成功连接</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='danger' disabled>危险连接</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='info' disabled>信息连接</my-link>`" class="html"></div>
                <div v-text="`&nbsp; &nbsp; <my-link type='warning' disabled>警告连接</my-link>`" class="html"></div>
                <div v-text="'</my-row>'" class="html"></div>
            </div>
        </div>
        <div style="margin-top:50px;;margin-bottom:100px">
            <h1>Link 属性</h1>
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
        const data = [
            {
                name: 'type',
                remark: '类型',
                type: 'string',
                canSelect: 'primary / success / warning / danger / info / default	',
                select: 'default',
            },
            {
                name: 'href',
                remark: '原生 href 属性',
                type: 'string',
                canSelect: '—',
                select: '—',
            },
            {
                name: 'round',
                remark: '是否为圆角按钮',
                type: 'boolean',
                canSelect: '—',
                select: 'false',
            },
        ]
        const state = reactive({
            data
        })

        return{
            ...toRefs(state)
        }
    }
};
</script>

<style lang="scss" scoped>
.layout{ 
    border: 1px solid #ebebeb;
    padding: 40px;
    height: auto;
}
.top{ 
    margin-top: 15px;
}
</style>