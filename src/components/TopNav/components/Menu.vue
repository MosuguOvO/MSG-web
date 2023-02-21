<template>
    <nav class="menu">
        <ul class="menu-list">
            <li @click="$router.push('/index')">
                <p>首页</p>
            </li>
            <li @click="$router.push('/index/chatgpt')">
                <p>聊天</p>
            </li>
            <li @click="$router.push('/index/message')">
                <p>留言板</p>
            </li>
            <li @click="$router.push('/index/edit')">
                <p>电影推荐</p>
            </li>

        </ul>


    </nav>
</template>


<style scoped lang="less">
@import url(../styles/Menu.less);
</style>