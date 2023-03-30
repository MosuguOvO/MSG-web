//一个点击后可以修改页面背景颜色的按钮

<template>
  <div class="sun-moon">
    <div v-if="flag" class="sun" @click="changeTheme('sun')">
      <i class="iconfont icon-taiyang"></i>
    </div>
    <div v-else class="moon" @click="changeTheme('moon')">
      <i class="iconfont icon-yueliang"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
let flag = ref(true);
const changeTheme = (type: string) => {
  if (type === 'sun') {
    flag.value = false;
    document.body.style.backgroundColor = '#fff!important';
  } else {
    flag.value = true;
    document.body.style.backgroundColor = '#000!important';
  }
};
</script>
<style lang="less" scoped>
.sun-moon {
  display: flex;
  align-items: center;
  i {
    margin: 0 auto;
    font-size: 2rem;
  }
  .sun,
  .moon {
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>
