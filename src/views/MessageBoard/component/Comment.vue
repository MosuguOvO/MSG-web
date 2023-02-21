<template>
    <div v-for="item in messageStore.message.data" :key="item.id">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>头像</span>
                    <span>{{ item.nickname }}</span>
                </div>
            </template>
            <div class="text item">{{ item.messageboard }}</div>

        </el-card>
    </div>

</template>

<script setup lang="ts">
import { getMessageStore } from '@/stores/message'
const messageStore = getMessageStore()
onMounted(async () => {
    await messageStore.getMessage()
})


</script>

<style scoped lang="less">
.box-card {
    border-radius: 1.5rem;
    margin-bottom: 2rem;

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        font-size: 2rem;
    }

    .item {
        margin-bottom: 18px;
    }
}
</style>