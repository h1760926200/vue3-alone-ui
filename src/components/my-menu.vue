<template>
    <div class="menu">
        <template v-for="item in routes">
          <sub-menu
            v-if="item.children && item.children.length > 1"
            :item="item"
            :base-path="item.path"
            :key="item.path"
          />
          <menu-item
            v-else
            :path="item.path"
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
        name: 'MyMenu',
        components: { 
            subMenu,
            menuItem
        },
        setup(props, context) {
            const featureState = reactive({ 
                value: '123',
                routes: 
                    [
                        {
                            path: '/',
                            meta: {
                            title: '八大菜系介绍'
                            }
                        },
                        {
                            path: '/luCai',
                            meta: {
                            title: '鲁菜'
                            },
                            children: [
                            {
                                path: 'history',
                                meta: {
                                title: '发展历史'
                                },
                                children: [
                                {
                                    path: 'qinAndHan',
                                    meta: {
                                    title: '秦汉时期'
                                    }
                                },
                                {
                                    path: 'northernWei',
                                    meta: {
                                    title: '北魏时期'
                                    }
                                }
                                ]
                            },
                            {
                                path: 'features',
                                meta: {
                                title: '风味特色'
                                }
                            }
                            ]
                        },
                        {
                            path: '/chuanCai',
                            meta: {
                            title: '川菜'
                            },
                            children: [
                            {
                                path: 'introduction',
                                meta: {
                                title: '川菜概论'
                                }
                            },
                            {
                                path: 'history',
                                meta: {
                                title: '发展历史'
                                }
                            }
                            ]
                        },
                ],
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
    background: white;
    overflow-x: hidden;
    box-shadow: 15px 0 35px rgba(35, 0, 232, 0.1);
}
</style>