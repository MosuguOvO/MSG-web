<template>
  <div class="container" ref="body">
    <TopIndex />
    <div class="main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </div>

    <Footer :style="{ width: footWidth }" style="margin: 0 auto" />
  </div>
</template>

<script setup lang="ts">
import { useComponentWidth } from '@/hooks/useDisplay';
const { footWidth } = useComponentWidth();
</script>

<style scoped lang="less">
@import url('@/assets/styles/Layout/Layout.less');
</style>
