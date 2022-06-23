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
    </div>
</template>

<script>
export default {
    name: 'HelloVue3Index',
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