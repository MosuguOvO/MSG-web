<template>
  <nav class="topnav">
    <!-- 头部导航栏 拆分四个组件使用 -->
    <el-header>
      <el-row :gutter="24">
        <!-- gutter是一行元素的间隙 总共24份由span获取 -->
        <el-col :span="2">
          <Logo />
        </el-col>
        <el-col :span="10">
          <Menu />
        </el-col>
        <el-col :span="7">
          <Search />
        </el-col>
        <el-col :span="2">
          <SunMoon />
        </el-col>

        <el-col :span="3">
          <RightInfo :userinfo="userStore.userinfo" />
        </el-col>
      </el-row>
    </el-header>
    <!-- 移动端适配 -->
  </nav>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/main';
import { currentUserApi } from '@/api/user';
import { useUserStore } from '@/stores/user';
defineProps({
  backColor: {
    type: String,
    default: () => 'rgb(248,248,248)'
  },
  fontColor: {
    type: String,
    default: () => '#fff'
  }
});

const store = useStore();
const userStore = useUserStore();
const user = store.user;

const getUserInfo = () => {
  if (user && user.token) {
    currentUserApi()
      .then((result: any) => {
        const { data } = result;
        if (data.code !== 200) {
          console.log(data.msg);
        } else {
          userStore.setUser(data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
getUserInfo();
</script>

<style scoped lang="less">
@import url(./styles/TopNav.less);
</style>
