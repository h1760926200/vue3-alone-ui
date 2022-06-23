<template>
  <div class="hello"> 
    <p>共有{{list.length || 0}}个任务其中{{okList.length || 0}}已完成</p>
    <p>未完成列表</p>
    <div v-for="(item,idx) in list" :key="item.name">
      <input type="checkbox" v-model="item.is" @click="done(item,idx)">
      {{item.name}}
    </div>
    <p>完成列表</p>
    <div v-for="item in okList" :key="item.name">
      <input type="checkbox" v-model="item.is" disabled />
      <span>{{item.name}} </span>
    </div>
    <input type="text" v-model="name">
    <button type="button" @click="add">添加</button>
    <div>
      <my-button type="danger" round>测试</my-button>
    </div>
    <!-- <input type="text" v-model="num1" @keyup="add()">+
    <input type="text" v-model="num2" @keyup="add()">
    {{result || 0}} -->
  </div>
</template>

<script>
import { onMounted, onUpdated, reactive, toRefs } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() { 
    const state = reactive({ 
      num1: 0,
      num2: 0,
      result: 0,
      list: [{
            name:'b1',
            is: false,
          },{
            name:'b2',
            is: false,
          },{
            name:'b3',
            is: false,
        }],
        okList: [],
        name: ''
      })

    onMounted(() => { 
      console.log('onMounted');
      getList()
    })

    onUpdated(() => { 
      console.log('onUpdated');
    })

    // const add = () => { 
    //   return state.result =  parseInt(state.num1) + parseInt(state.num2)
    // }

    const getList = async () => { 
      console.log(123);
    }

    const add = () => { 
      let obj = { 
        name: state.name,
        is: false,
      }
      state.list.push({...obj})
      state.name = ''
    }

    const done = async (data,idx) => { 
      data.is = true
      state.list.splice(idx,1)
      state.okList.push({...data})
    }

    return { 
      ...toRefs(state),
      add,
      getList,
      done
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
