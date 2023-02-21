<template>
    <header>
        <div :style="{ backgroundColor: color }" class="topbox">
            <TopNav />
            <ContentBox v-show="isMatched" />
        </div>
</header>
</template>

<script setup lang="ts">
import { useComponentDisplay } from '@/hooks/useDisplay'
import { useRouter } from 'vue-router';
const router = useRouter()
const { isMatched, color } = useComponentDisplay()

</script>

<style scoped lang="less">
.topbox {
    background-color: #f4ede4;
    width: 100%;
    font-size: 14px;
}
</style>