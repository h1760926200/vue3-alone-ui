<template>
    <div>
        <myheader class="myheader"></myheader>
        <div class="flex-main">
            <narbar class="narbar"></narbar>
            <router-view class="main"></router-view>
        </div>
    </div>
</template>

<script>
import myheader from '@/components/header'
import narbar from '@/components/narbar'
export default {
    name: 'HelloVue3Layout',
    components: { 
        myheader,
        narbar
    },
    setup() { 

    }
};
</script>

<style lang="scss" scoped>
.myheader{ 
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 15px 0 35px rgba(35, 0, 232, 0.1);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1500;
}
.narbar{ 
    // height: calc(100% - 88px);
    height: auto;
    width: 220px;
    text-align: center;
    box-shadow: 15px 0 35px rgba(35, 0, 232, 0.1);
    margin-top: 15px;
}
.flex-main{ 
    display: flex;
    margin-top: 88px;
}
.main{ 
    flex:1;
    padding: 40px;
}
</style>