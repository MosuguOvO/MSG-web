<template>
  <div class="search">
    <el-input
      v-model="searchText"
      class="w-50 m-2"
      size="large"
      placeholder="输入(待完成)"
      type="text"
    >
      <template #suffix>
        <i class="iconfont icon-sousuo touch-style" @click="handleSearch"></i>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';

let searchText = ref('');

const handleSearch = () => {
  // 处理搜索逻辑
  console.log(123);
};
</script>

<style scoped lang="less">
.search {
  width: 22rem; //
  position: relative; /* 让盒子相对定位 */
  animation-name: move; /* 指定动画名称 */
  animation-duration: 1s; /* 指定动画持续时间 */
  animation-delay: 0.2s; /* 指定动画延迟时间 */
  animation-fill-mode: forwards;
  &:focus {
    width: 24rem;
  }
}
@keyframes move {
  from {
    width: 22rem;
  } /* 定义起始状态 */
  to {
    width: 25rem;
  } /* 定义结束状态 */
}
:deep(.el-input__inner::placeholder) {
  color: #ccc; /* 修改placeholder文字颜色 */
}
.touch-style {
  cursor: pointer;
}

.search {
  .el-input__inner {
    width: 200px;
  }
}
</style>
