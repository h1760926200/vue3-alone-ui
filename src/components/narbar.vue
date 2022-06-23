<template>
    <div class="narbar">
        <div v-for="val in list" :key="val.path" class="box-li" @click="gotoPage(val.path)" :class="getClass(val.path)">{{val.name}}</div>
    </div>
</template>

<script>
import { computed, onMounted, reactive,toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: 'HelloVue3Narbar',
    setup() { 
        const router = useRouter()
        const state = reactive({ 
            list: [
                { 
                    path: '/layout',
                    name: 'Layout布局'
                },
                { 
                    path: '/button',
                    name: 'Button按钮'
                },
                { 
                    path: '/link',
                    name: 'Link文字链接'
                },
                { 
                    path: '/selectEnum',
                    name: 'Select枚举值'
                },
                { 
                    path: '/open_tree',
                    name: '递归展开树'
                },
                { 
                    path: '/drag_form',
                    name: '可拖拽Form表单'
                },
                { 
                    path: '/drag_table',
                    name: '可拖拽Table表格'
                },
                { 
                    path: '/select',
                    name: 'Select选择框'
                },
                { 
                    path: '/input',
                    name: 'Input输入框'
                },
                { 
                    path: '/dialog',
                    name: 'Dialog对话框'
                },
                { 
                    path: '/tree',
                    name: 'Tree树形'
                },
                { 
                    path: '/form',
                    name: 'Form表单'
                },
                { 
                    path: '/table',
                    name: 'Table表格'
                },
                { 
                    path: '/tag',
                    name: 'Tag标签'
                },
                { 
                    path: '/pagination',
                    name: 'Pagination分页'
                },
                { 
                    path: '/message',
                    name: 'Message消息通知'
                },
                { 
                    path: '/menu',
                    name: 'Menu导航菜单'
                },
                { 
                    path: '/dropdown',
                    name: 'Dropdown下拉菜单'
                },
                { 
                    path: '/tooltip',
                    name: 'Tooltip文字提示'
                },
                { 
                    path: '/popover',
                    name: 'Popover弹出框'
                },
                { 
                    path: '/popconfirm',
                    name: 'Popconfirm气泡确认框'
                },
                { 
                    path: '/image',
                    name: 'Image图片'
                },
            ]
        })

        const getClass = (path) => { 
            if(path === router.currentRoute.value.fullPath) return 'active'
        }

        const gotoPage = (path) => { 
            router.push({
                path
            })
        }

        onMounted(() => { 
        })

        return { 
            ...toRefs(state),
            gotoPage,
            getClass
        }
    }
};
</script>

<style lang="scss" scoped>
.narbar{ 
    height: 100%;
}
.box-li{
    margin-top: 30px;
    display: block;
    color: #444;
    font-size: 14px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
}
.active{ 
    color: blue;
}
</style>