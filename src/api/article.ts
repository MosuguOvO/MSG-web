import request from '@/utils/request';

export const getArticleByIdApi = (id: any) => {
  return request({
    method: 'get',
    url: `/api/article/${id}`
  });
};

export const getArticleLikeApi = (id: any) => {
  return request({
    method: 'get',
    url: `/api/article/like/${id}`
  });
};

export const getArticleCommentApi = (id: any) => {
  return request({
    method: 'get',
    url: `/api/article/comment/${id}`
  });
};

export const getArticleCommentByArticleidApi = (id: any) => {
  return request({
    method: 'get',
    url: `/api/article/commentbyarticleid/${id}`
  });
};
export const getArticleCommentUserByArticleidApi = (id: any) => {
  return request({
    method: 'get',
    url: `/api/article/commentuserbyarticleid/${id}`
  });
};

//文章头图
export const getArticleApi = () => {
  return request({
    method: 'get',
    url: `/api/article/articleall`
  });
};

//上传图片
export const uploadImage = (imgFile: any, cb?: any) => {
  return request({
    method: 'post',
    url: '/api/upload/img',
    data: imgFile,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: e => {
      if (e.lengthComputable) {
        if (cb) cb(e);
      }
    },
    timeout: 60000
  });
};
