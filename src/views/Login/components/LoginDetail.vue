<template>
  <div class="login">
    <div class="imgbox">
      <!-- 右侧登陆 -->
      <transition name="slide" mode="out-in">
        <div v-if="showLog" class="temp" :key="1">
          <div class="login-box">
            <div class="loginform">
              <div class="tw-w-48 tw-my-5 label--big">
                <p class="zh">登陆</p>
                <p class="en">Login to WEB</p>
              </div>
              <ElForm label-position="left" ref="ruleFormRef" :rules="rules" :model="form">
                <ElFormItem prop="username">
                  <div class="tw-w-32 tw-h-10 tw-mr-5 label">
                    <p class="zh">用户名</p>
                  </div>
                  <ElInput v-model="form.username">1</ElInput>
                </ElFormItem>
                <ElFormItem prop="password">
                  <div class="tw-w-32 tw-h-10 tw-mr-5 label">
                    <p class="zh">密码</p>
                  </div>
                  <ElInput type="password" v-model="form.password"></ElInput>
                </ElFormItem>
              </ElForm>
              <div class="btn">
                <div class="register-btn" @click="showLog = false"></div>
                <div class="login-btn" @click="submitForm(ruleFormRef)"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="temp" :key="2">
          <div class="login-box">
            <div class="loginform">
              <div class="tw-w-48 tw-my-5 label--big">
                <p class="zh">注册</p>
                <p class="en">Register</p>
              </div>
              <ElForm
                label-position="left"
                ref="ruleFormRegisterRef"
                :rules="regRules"
                :model="formRegister"
              >
                <ElFormItem prop="username">
                  <div class="tw-w-32 tw-h-10 tw-mr-5 label">
                    <p class="zh">用户</p>
                    <p class="en">account</p>
                  </div>
                  <ElInput v-model="formRegister.username">1</ElInput>
                </ElFormItem>
                <ElFormItem prop="password">
                  <div class="tw-w-32 tw-h-10 tw-mr-5 label">
                    <p class="zh">密码</p>
                    <p class="en">Password</p>
                  </div>
                  <ElInput type="password" v-model="formRegister.password"></ElInput>
                </ElFormItem>
                <ElFormItem prop="nickname">
                  <div class="tw-w-32 tw-h-10 tw-mr-5 label">
                    <p class="zh">昵称</p>
                    <p class="en">nickname</p>
                  </div>
                  <ElInput type="text" v-model="formRegister.nickname"></ElInput>
                </ElFormItem>
              </ElForm>
              <div class="btn">
                <div class="register-btn" @click="submitRegForm(ruleFormRegisterRef)"></div>
                <div class="login-btn" @click="showLog = true"></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useLoginProp,
  useLoginMethod,
  useRoles,
  userRegisterProp,
  userRegisterMethod,
  useRegRoles
} from '@/hooks/login';
let showLog = ref(true);
//登陆
const { ruleFormRef, form, target, x, y, router, userStore } = useLoginProp();
const { submitForm } = useLoginMethod(userStore, router, form);
const { rules } = useRoles();

//注册
const { formRegister, ruleFormRegisterRef } = userRegisterProp();
const { submitRegForm } = userRegisterMethod(showLog, formRegister);
const { regRules } = useRegRoles();
</script>

<style scoped lang="less">
@import url(../styles/LoginDetail.less);
</style>
