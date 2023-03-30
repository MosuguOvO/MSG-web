<template>
  <aside class="right">
    <ul v-if="userinfo.nickname" class="icon-group">
      <li>
        <p>
          欢迎您&nbsp;
          <span class="username">{{ userinfo.nickname }}</span>
        </p>
      </li>
    </ul>
    <div class="default" v-else>
      <div class="login">
        <router-link to="/login">
          <p style="color: #969696">登陆</p>
        </router-link>
      </div>
      <div class="register">
        <router-link to="/register">
          <p>注册</p>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  userinfo: {
    // 以UserEasy类型为属性的对象,是一个用户定义的类型，它可以用来定义一组可以在Vue组件中使用的属性
    type: Object as PropType<UserEasy>,
    default: () => {
      return {};
    }
  }
});
</script>
<style scoped lang="less">
@import url(../styles/RightInfo.less);

.username {
  color: #541554;
}
</style>
