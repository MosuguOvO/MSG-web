<template>
  <header>
    <div class="topbox">
      <TopNav />
      <ContentBox v-show="isMatched" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useComponentDisplay } from '@/hooks/useDisplay';
const { isMatched, color } = useComponentDisplay();
</script>

<style scoped lang="less">
.topbox {
  width: 100%;
  font-size: 14px;
}
</style>
