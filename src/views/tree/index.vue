<template>
    <div>
        <h1>Tree递归树</h1>
    </div>
</template>

<script>
import { reactive,toRefs,ref,defineComponent,getCurrentInstance } from 'vue'
import myTree from '@/components/my-tree'
export default defineComponent({
    components: {
        myTree
    },
    setup() { 
        const { proxy } = getCurrentInstance();

        // const childFormRef: any = ref<InstanceType<typeof Child>>()
        const state = reactive({ 
            query: '',
            driverData: [
                {
                    id: 1,
                    label: 'Level one 1',
                    children: [
                    {
                        id: 4,
                        label: 'Level two 1-1',
                        children: [
                        {
                            id: 9,
                            label: 'Level three 1-1-1',
                        },
                        {
                            id: 10,
                            label: 'Level three 1-1-2',
                        },
                        ],
                    },
                    ],
                },
                {
                    id: 2,
                    label: 'Level one 2',
                    children: [
                    {
                        id: 5,
                        label: 'Level two 2-1',
                    },
                    {
                        id: 6,
                        label: 'Level two 2-2',
                    },
                    ],
                },
                {
                    id: 3,
                    label: 'Level one 3',
                    children: [
                    {
                        id: 7,
                        label: 'Level two 3-1',
                    },
                    {
                        id: 8,
                        label: 'Level two 3-2',
                    },
                    ],
                },
            ],
            treeList: []
        })

        const handleCheck = (refName) => { 
            state.treeList[refName] = proxy?.$refs?.driverTree?.getCheckedNodes()
        }

        return{ 
            ...toRefs(state),
            handleCheck,
        }
    }
});
// export default {
//     name: 'HelloVue3Index',
//     components: { 
//         myTree
//     },
//     setup() { 
//         const driverTree = ref(null)
//         // const childFormRef: any = ref<InstanceType<typeof Child>>()
//         const state = reactive({ 
//             query: '',
//             driverData: [
//                 {
//                     id: 1,
//                     label: 'Level one 1',
//                     children: [
//                     {
//                         id: 4,
//                         label: 'Level two 1-1',
//                         children: [
//                         {
//                             id: 9,
//                             label: 'Level three 1-1-1',
//                         },
//                         {
//                             id: 10,
//                             label: 'Level three 1-1-2',
//                         },
//                         ],
//                     },
//                     ],
//                 },
//                 {
//                     id: 2,
//                     label: 'Level one 2',
//                     children: [
//                     {
//                         id: 5,
//                         label: 'Level two 2-1',
//                     },
//                     {
//                         id: 6,
//                         label: 'Level two 2-2',
//                     },
//                     ],
//                 },
//                 {
//                     id: 3,
//                     label: 'Level one 3',
//                     children: [
//                     {
//                         id: 7,
//                         label: 'Level two 3-1',
//                     },
//                     {
//                         id: 8,
//                         label: 'Level two 3-2',
//                     },
//                     ],
//                 },
//             ],
//             treeList: []
//         })

//         const handleCheck = (refName) => { 
//             console.log(driverTree.value.getCheckedNodes());
//             // state.treeList[refName] = driverTree.getCheckedNodes()
//         }

//         return{ 
//             ...toRefs(state),
//             handleCheck
//         }
//     }
// };
</script>

<style lang="scss" scoped>

</style>