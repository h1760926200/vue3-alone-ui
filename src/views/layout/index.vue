<template>
    <div class="layout-box">
        <h1>Layout布局</h1>
        <div class="layout">
            <my-row>
                <my-col :span="24" class="box"></my-col>
            </my-row>
            <my-row>
                <my-col :span="12" class="box top"></my-col>
                <my-col :span="12" class="box change-color top"></my-col>
            </my-row>
            <my-row>
                <my-col :span="6" class="box top "></my-col>
                <my-col :span="6" class="box top change-color"></my-col>
                <my-col :span="6" class="box top"></my-col>
                <my-col :span="6" class="box top change-color"></my-col>
            </my-row>
            <my-row>
                <my-col :span="4" class="box top "></my-col>
                <my-col :span="4" class="box top change-color"></my-col>
                <my-col :span="4" class="box top"></my-col>
                <my-col :span="4" class="box top change-color"></my-col>
                <my-col :span="4" class="box top"></my-col>
                <my-col :span="4" class="box top change-color"></my-col>
            </my-row>
            <my-row>
                <my-col :span="3" class="box top "></my-col>
                <my-col :span="3" class="box top change-color"></my-col>
                <my-col :span="3" class="box top"></my-col>
                <my-col :span="3" class="box top change-color"></my-col>
                <my-col :span="3" class="box top"></my-col>
                <my-col :span="3" class="box top change-color"></my-col>
                <my-col :span="3" class="box top "></my-col>
                <my-col :span="3" class="box top change-color"></my-col>
            </my-row>
            <div class="footer">
                <div class="trotion">
                    通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
                </div>
                <div>
                    <div v-text="'<my-row>'" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='24' class='box'></my-col>`" class="html"></div>
                    <div v-text="'</my-row>'" class="html"></div>
                    <div v-text="'<my-row>'" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='12' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='12' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="'</my-row>'" class="html"></div>
                    <div v-text="'<my-row>'" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='6' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='6' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='6' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='6' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="'</my-row>'" class="html"></div>
                    <div v-text="'<my-row>'" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='4' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='4' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='4' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='4' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='4' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='4' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="'</my-row>'" class="html"></div>
                    <div v-text="'<my-row>'" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='3' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='3' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='3' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='3' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='3' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='3' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='3' class='box top'></my-col>`" class="html"></div>
                    <div v-text="`&nbsp; &nbsp; <my-col :span='3' class='box top change-color'></my-col>`" class="html"></div>
                    <div v-text="'</my-row>'" class="html"></div>
                </div>
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

.box { 
    background: #99a9bf;
    height: 40px;
}
.top{ 
    margin-top: 20px;
}
.change-color{ 
    background: #d3dce6;
}
.footer{ 
    background-color: #fafafa;
    .trotion{ 
        padding: 40px 20px;
        box-sizing: border-box;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        font-size: 14px;
        color: #666;
        word-break: break-word;
        background-color: #fff;
        margin-top: 20px;
        font-size: 14px;
        color: rgb(94, 109, 130);
    }
}

</style>