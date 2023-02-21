<template>
    <div class="sub-title">
        <div class="content">
            <div class="icon">
                <p>
                    <slot></slot>
                </p>
            </div>
            <p class="right">
                <slot name="right"></slot>
            </p>
        </div>
    </div>
</template>



<style scoped lang="less">
@import url(../styles/SubTitle.less);
</style>