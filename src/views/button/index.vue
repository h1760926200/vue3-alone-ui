<template>
    <div>
        <h1>Button按钮</h1>
        <div class="layout">
            <my-row>
                <my-button>默认按钮</my-button>
                <my-button type="success">Success按钮</my-button>
                <my-button type="danger">danger按钮</my-button>
                <my-button type="info">info按钮</my-button>
            </my-row>
            <my-row class="top">
                <my-button round>圆角按钮</my-button>
                <my-button type="primary" round>Primary按钮</my-button>
                <my-button type="success" round>Success按钮</my-button>
                <my-button type="danger" round>danger按钮</my-button>
                <my-button type="info" round>info按钮</my-button>
            </my-row>
            <my-row class="top">
                <my-button disabled>禁用按钮</my-button>
                <my-button type="primary" disabled>Primary按钮</my-button>
                <my-button type="success" disabled>Success按钮</my-button>
                <my-button type="danger" disabled>danger按钮</my-button>
                <my-button type="info" disabled>info按钮</my-button>
            </my-row>
            <my-row class="top">
                <my-button size="large">超大按钮</my-button>
                <my-button type="primary" size="normal">正常按钮</my-button>
                <my-button type="success" size="medium">中型按钮</my-button>
                <my-button type="danger" size="small">小型按钮</my-button>
            </my-row>
            <div class="footer">
                <div class="trotion">
                    使用type、round、size、disabled属性来定义 Button 的样式。
                </div>
                <div>
                    <div v-text="'<my-row>'" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button >默认按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='primary'>Primary按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='success'>Success按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='danger'>danger按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='info'>info按钮</my-button>`" class="html"></div>
                    <div v-text="'</my-row>'" class="html"></div>
                    <div v-text="'<my-row>'" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button round>圆角按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='primary' round>Primary按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='success' round>Success按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='danger' round>danger按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='info' round>info按钮</my-button>`" class="html"></div>
                    <div v-text="'</my-row>'" class="html"></div>
                    <div v-text="'<my-row>'" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button disabled>禁用按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='primary' disabled>Primary按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='success' disabled>Success按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='danger' disabled>danger按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button type='info' disabled>info按钮</my-button>`" class="html"></div>
                    <div v-text="'</my-row>'" class="html"></div>
                    <div v-text="'<my-row>'" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button size='large'>超大按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button size='normal'>正常按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button size='medium'>中型按钮</my-button>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-button size='small'>小型按钮</my-button>`" class="html"></div>
                    <div v-text="'</my-row>'" class="html"></div>
                </div>
            </div>
        </div>
        <div style="margin-top:50px;;margin-bottom:100px">
            <h1>Button 属性</h1>
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
                name: 'size',
                remark: '尺寸',
                type: 'string',
                canSelect: 'large / default /small	',
                select: '—',
            },
            {
                name: 'type',
                remark: '类型',
                type: 'string',
                canSelect: 'primary / success / warning / danger / info',
                select: '—',
            },
            {
                name: 'round',
                remark: '是否为圆角按钮	',
                type: 'boolean',
                canSelect: '—',
                select: 'false',
            },
            {
                name: 'disabled',
                remark: '按钮是否为禁用状态	',
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