<template>
    <router-link :to="path" :style="`background: ${backgroundColor};color:${textColor};text-decoration: none;`">
        <div class="menu-item" >{{title}}</div>
    </router-link>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        path: { 
            type: String,
            required: true
        },
        title: { 
            type: String,
            required: true
        },
        textColor: {
            type: String,
            default: '#303133'
        },
        backgroundColor: {
            type: String,
            default: '#fafafa'
        }
    }
};
</script>

<style lang="scss" scoped>
.menu-item {
  padding: 20px;
  user-select: none;
}
// .menu-item:hover {
//   background: rgb(244, 244, 244);
// }
</style>