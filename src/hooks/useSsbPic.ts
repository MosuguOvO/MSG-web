import { getssbIndexPic, getssbIndexTitle } from '@/api/ssb';
export const getSsbPic = async () => {
  const data = ref<any>({ images: [] });
  const result = await getssbIndexPic();
  data.value = result.data;
  return {
    data
  };
};

// const updateCurrentPageImgs = (page: number) => {
//     if (data.value) {
//         currentPageImgs.value = data.value.images.slice(page * 5, (page + 1) * 5)
//     }
// }
// updateCurrentPageImgs(0)
// const getIndexTitle = async () => {
//     const result = await getssbIndexTitle()
//     dataTitle.value = result.data
// }
