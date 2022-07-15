<template>
    <div class="menu" :style="`background-color:${backgroundColor};color:${textColor};`">
        <template v-for="item in data">
          <sub-menu
            v-if="item.children && item.children.length > 1"
            :item="item"
            :base-path="item.path"
            :background-color="backgroundColor"
            :text-color="textColor"
            :key="item.path"
          />
          <menu-item
            v-else
            :path="item.path"
            :background-color="backgroundColor"
            :text-color="textColor"
            :title="item.meta.title"
            :key="item.path"
            />
        </template>
    </div>
</template>

<script>
    import subMenu from '@/components/subMenu'
    import menuItem from '@/components/menu-item'
    import { ref, reactive, toRefs, onMounted, provide } from 'vue';
    export default {
        props: { 
            data: {
                type: Array,
            },
            textColor: {
                type: String,
                default: '#303133'
            },
            backgroundColor: {
                type: String,
                default: '#ffffff'
            }
        },
        name: 'MyMenu',
        components: { 
            subMenu,
            menuItem
        },
        setup(props, context) {
            const featureState = reactive({ 
                value: '123',
                openedSubMenus: [],

            });
            const handleClickSubMenu = (path) => { 
                if (featureState.openedSubMenus.includes(path)) {
                    closeSubMenu(path)
                } else {
                    openSubMenu(path)
                }
            }
            provide('rootMenu',featureState)
            provide('menuFuc',handleClickSubMenu)
            const openSubMenu = (path) => { 
                featureState.openedSubMenus.push(path)
            }

            const closeSubMenu = (path) => { 
                featureState.openedSubMenus.splice(featureState.openedSubMenus.indexOf(path), 1)
                // 关闭 path 下的子菜单
                featureState.openedSubMenus = featureState.openedSubMenus.filter(item => item.indexOf(path+'/') !== 0)
            }

            return {
                ...toRefs(featureState)
            }
        }
    }
</script>

<style lang="scss" scoped>
.menu {
    user-select: none;
    width: 200px;
    height: 100%;
    overflow-x: hidden;
}
</style>