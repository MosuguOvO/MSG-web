<template>
  <div class="message" ref="body">
    <div class="line"></div>
    <div class="top-info">
      <div class="logo">
        <div>
          <el-image></el-image>
        </div>
        <p class="title">留言板</p>
      </div>
      <p class="desc">输入昵称进行留言 OvO</p>
    </div>
    <!-- 信息框 -->
    <div class="edit-part">
      <div class="edit-info">
        <div class="nickname">
          <span>你的昵称:</span>
          <el-input
            size="large"
            v-model="messageParams.nickname"
            show-word-limit
            max-length="16"
          ></el-input>
        </div>
      </div>
      <el-divider></el-divider>
      <!-- 头像部分 -->
      <div class="edit-message">
        <div class="main-content">
          <div class="msg-avatar">
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              :limit="1"
              class="upload-demo"
              :multiple="false"
              v-if="showUpload"
              :on-success="handleSuccess"
              @remove="handleRemove"
              :file-list="fileList"
            >
              <el-icon>
                <Plus />
              </el-icon>
              <template #file="{ file }">
                <div>
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <el-icon><zoom-in /></el-icon>
                    </span>
                    <span
                      v-if="false"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <el-icon>
                        <Download />
                      </el-icon>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <el-icon>
                        <Delete />
                      </el-icon>
                    </span>
                  </span>
                </div>
              </template>
            </el-upload>

            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </div>
        </div>
        <!-- 文本框 -->
        <div class="edit-content">
          <el-input
            class="edit-textarea"
            type="textarea"
            v-model="messageParams.messageboard"
            :rows="6"
            placeholder="这里输入留言内容喔~"
            show-word-limit
            maxlength="64"
          >
          </el-input>
          <el-button type="primary" class="edit-button" @click="postMessage">提交</el-button>
        </div>
      </div>
      <!-- 留言部分 -->
      <ElDivider />
      <div class="message-part">
        <h2>留言列表</h2>
        <p>默认</p>
        <p>倒序</p>
      </div>
      <!-- 留言数据 -->
      <div class="message-info">
        <!-- v-for="item in CommentList"
                :key="item.id" -->
        <Comment />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MessageBoard'
};
</script>

<script setup lang="ts">
import Comment from './component/Comment.vue';
import { ElMessage } from 'element-plus';
import type { UploadProps } from 'element-plus';
import { useMessageBoardParams } from '@/hooks/useMessageBoard';
import { ref } from 'vue';
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue';
import type { UploadFile } from 'element-plus';
import { postMessageApi } from '@/api/message';
const imageUrl = ref('');
const { messageParams } = useMessageBoardParams();
const postMessage = async () => {
  let result = await postMessageApi(messageParams);
  console.log(result);
};

const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const disabled = ref(false);

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const handleDownload = (file: UploadFile) => {
  console.log(file);
};

//头像部分
const showUpload = ref(true);
const fileList = ref([]);
console.log(showUpload.value);

const handleSuccess = showUpload => {
  showUpload.value = false;
  console.log(showUpload.value);
};
const handleRemove = showUpload => {
  showUpload.value = true;
};
</script>

<style scoped lang="less">
@import url(./styles/MessageBoard.less);

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
