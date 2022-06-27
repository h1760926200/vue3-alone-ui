<template>
    <el-container>
        <el-container class="myheader">
            <myheader ></myheader>
        </el-container>
        <el-container class="container">
            <el-aside
                class="aside"
                style="overflow: auto"
            >
                <narbar ></narbar>
            </el-aside>
        </el-container>
            <el-main class="main">
                <router-view ></router-view>
            </el-main>
    </el-container>
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
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 15px 0 35px rgba(35, 0, 232, 0.1);
    position: fixed;
    left: 0;
    opacity: 1;
    top: 0;
    z-index: 2032;
}
.narbar{ 
    // height: calc(100% - 88px);
    position: fixed;
    top: 80px;
    left: 50px;
    height: 800px;
    width: 220px;
    text-align: center;
    box-shadow: 15px 15px 35px 15px rgba(35, 0, 232, 0.1);
    overflow-y: auto;
    // margin: 88px 20px 20px 40px;
    // z-index: 999;
}
  .narbar::-webkit-scrollbar {
    width : 5px;  
    height: 1px;
  }
  .narbar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background   : #ededed;
  }
  .narbar::-webkit-scrollbar-track {
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background   : #ededed;
  }
// .flex-main{ 
//     display: flex;
//     margin-top: 88px;
// }
.main{ 
    width: calc(100% - 340px);
    // padding: 20px ;
    // position: fixed;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-top: 55px;
    // z-index: -1;
    // left: 250px;
}
.container {
    overflow: hidden;
    position: relative;
}
</style>