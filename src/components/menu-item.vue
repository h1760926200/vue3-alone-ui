<template>
    <router-link to="/open_tree" style="text-decoration: none;">
        <div class="menu-item">{{title}}</div>
    </router-link>
</template>

<script>
export default {
    name: 'HelloVue3MenuItem',
    props: {
        path: { 
            type: String,
            required: true
        },
        title: { 
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.menu-item {
  padding: 20px;
  color: rgb(153, 153, 153);
  user-select: none;
}
.menu-item:hover {
  background: rgb(244, 244, 244);
}
</style>