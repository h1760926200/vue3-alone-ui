<template>
    <div
        :style="`color:${textColor};`">
        <div
            class="title"
            @click="handleClick"
            
        >
        <!-- 标题 -->
        <a href="javascript:void(0)" :style="`user-select: none;text-decoration: none;color:${textColor};`">{{ item.meta.title }}</a>
        <!-- 箭头符号 -->
        <svg class="icon" viewBox="0 0 1024 1024" width="16" height="16">
            <path d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z" fill="#999999"/>
        </svg>
        </div>
        <div
            v-show="expanded"
            class="children"
        >
        <template v-for="itemX in item.children">
            <sub-menu
                v-if="itemX.children && itemX.children.length>1"
                :item="itemX"
                :base-path="resolvePath(itemX.path)"
                :key="itemX.path"
            />
            <menu-item
                v-else
                :path="resolvePath(itemX.path)"
                :title="itemX.meta.title"
                :key="itemX.path"
            />
        </template>
        </div>
    </div>
</template>

<script>
import { computed, reactive,toRefs,inject } from 'vue'
import menuItem from '@/components/menu-item'
export default {
    name: 'MyMenu',
    components: { 
        menuItem
    },
    props: {
        item: { 
            type: Object,
            required: true
        },
        basePath: { 
            type: String,
            default: ''
        },
        textColor: {
            type: String,
            default: '#303133'
        },
        backgroundColor: {
            type: String,
            default: '#fafafa'
        }
    },
    setup(props) { 
        const data = inject('rootMenu')
        const fnc = inject('menuFuc')
        const prop = toRefs(props)
            console.log(data);
        const expanded = computed(() =>{ 
            return data.openedSubMenus.includes(prop.basePath.value)
        })

        const state = reactive({ 
        })

        const resolvePath = (routePath)  => {
            // return path.resolve(this.basePath, routePath)
            return routePath
        }

        const handleClick = () => { 
            fnc(prop.basePath.value)
        }
        return { 
            ...toRefs(state),
            resolvePath,
            expanded,
            handleClick
        }
    }
};
</script>

<style lang="scss" scoped>
.title {
  padding: 20px;
  text-decoration: none;
}
// .title:hover {
//   background: rgb(244, 244, 244);
// }
.children {
  padding-left: 20px;
}
.icon {
  float: right;
  color: #999999;
}

</style>