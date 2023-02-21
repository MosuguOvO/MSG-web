<template>
  <div class="chat">
    <div class="messages">
      <div class="line"></div>
      <div class="message">
        <div class="avatar"></div>
        <div class="content">
          <div class="text">Hello!</div>
        </div>
      </div>
      <div class="message right">
        <div class="avatar"></div>
        <div class="content">
          <div class="text">Here is Chatgpt</div>
        </div>
      </div>
      <div class="message">
        <div class="avatar"></div>
        <div class="content">
          <div class="text">Can I ask you a question?</div>
        </div>
      </div>
      <div class="message right">
        <div class="avatar"></div>
        <div class="content">
          <div class="text">Of Course,what's your problem?</div>
        </div>
      </div>
      <div class="message" v-show="res">
        <div class="avatar"></div>
        <div class="content">
          <div class="text">{{ info }}</div>
        </div>
      </div>
      <div class="message right" v-if="res">
        <div class="avatar"></div>
        <div class="content">
          <div class="text">{{ res }}</div>
        </div>
      </div>
    </div>
    <div class="input">
      <el-input type="text" placeholder="发送问题" v-model="info" show-word-limit></el-input>
      <el-button type="primary" @click="ask" class="button1">发送提问</el-button>
    </div>
  </div>
</template>

<!-- <template>
  <div class="mainChat">
    <div class="question-box">
      <i class="iconfont icon-UIicon_yonghu- usericon"></i>
      <el-input
        type="textarea"
        placeholder="发送问题"
        v-model="info"
        show-word-limit
      ></el-input>
    </div>
    <div class="answer-box">
      <el-input
        :rows="2"
        type="textarea"
        placeholder="回答~(输入英文回复更快)"
        class="content"
        disabled
        autosize
        szie="large"
        v-model="res"
      ></el-input>
      <i class="iconfont icon-UIicon_xiaoxi- answericon"></i>
    </div>
    <el-button type="primary" @click="ask" class="button1">发送提问</el-button>
  </div>
</template> -->

<script setup lang="ts">
import axios from 'axios';
import { ElMessage } from 'element-plus';
//chatgpt使用
let answer = ref('');
let hasAnswer = ref(false);
let api = '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';
let res = ref('');
let info = ref('');
const ask = async () => {
  if (info.value === '') return ElMessage('错误');
  res.value = '请求中...';
  let result = await axios
    .post(
      'https://api.openai.com/v1/completions',
      {
        prompt: info.value,
        max_tokens: 2048,
        model: 'text-davinci-003'
      },
      {
        headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + api }
      }
    )
    .then(response => {
      res.value = response.data.choices[0].text.replace(/(\n){2}|[;!\?]/g, '\n');
    });

  answer.value = res.value;
  hasAnswer.value = true;
};
</script>

<style scoped lang="less">
@import url(./styles/index.less);
</style>
