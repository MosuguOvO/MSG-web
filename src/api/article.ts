import request from "@/utils/request";


//文章头图
export const getIndexBanner = () => {
    return request({
        method: 'get',
        url: `/api/article/articleall`,
    })
}

//上传图片
export const uploadImage = (imgFile: any, cb?: any) => {
    return request({
        method: 'post',
        url: '/api/upload/img',
        data: imgFile,
        headers: {
            'Content-Type':'multipart/form-data'
        },
        onUploadProgress: e => {
            if (e.lengthComputable) {
                if(cb) cb(e)
            }
        },
        timeout:60000
    })
}