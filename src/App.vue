<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ElConfigProvider } from 'element-plus'
import resize from '@/utils/resize'
onMounted(() => {
  resize()
})
</script>
