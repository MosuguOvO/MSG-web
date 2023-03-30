<template>
  <div class="main">
    <div class="question-box">
      <i class="iconfont icon-UIicon_yonghu- usericon"></i>
      <el-input
        type="textare"
        placeholder="发送问题"
        v-model="info"
        show-word-limit
        max-length="20"
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
</template>

<script setup lang="ts">
import axios from 'axios';
//chatgpt使用
let api = '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';
let res = ref('');
let info = ref('');
const ask = () => {
  res.value = '请求中...';
  axios
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
};
</script>

<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
}

.question-box {
  display: flex;
  margin-top: @margin-general;
  margin-bottom: @margin-general;
  width: 80%;
  border-radius: 1.5rem;

  .el-input .is-disabled input {
    color: #000;
  }

  .usericon {
    margin-right: @margin-general;
    font-size: 2rem;
  }

  .button1 {
    height: 3rem;
  }
}

.answer-box {
  display: flex;
  align-self: flex-end;
  width: 80%;
  font-size: 2rem;
  border-radius: 1.5rem;

  .content {
    color: black;
  }

  .answericon {
    font-size: 2rem;
    margin-left: @margin-general;
  }
}
</style>
