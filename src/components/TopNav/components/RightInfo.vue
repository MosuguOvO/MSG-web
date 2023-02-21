<template>
    <aside class="right">
        <ul v-if="userinfo.id" class="icon-group">
            <li>
                <p>欢迎您的光临&nbsp;
                    <span class="username">{{ userinfo.username }}</span>
                </p>
            </li>
        </ul>
        <p v-else>
            这 边 <router-link to="/login">登陆哦~</router-link>
        </p>
    </aside>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
    userinfo: {
        // 以UserEasy类型为属性的对象,是一个用户定义的类型，它可以用来定义一组可以在Vue组件中使用的属性
        type: Object as PropType<UserEasy>,
        default: () => {
            return {}
        }
    }
})
</script>
<style scoped lang="less">
@import url(../styles/RightInfo.less);

.username {
    color: #541554;
}
</style>