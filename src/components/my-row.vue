<template>
    <div class="my-row">
        <slot></slot>
    </div>
</template>

<script>
import myCol from '@/components/my-col'
export default {
    name: 'MyRow',
    components: { 
        myCol
    }
};
</script>

<style lang="scss" scoped>
.my-row{ 
    width: 100%;
    display: flex;
}
</style>