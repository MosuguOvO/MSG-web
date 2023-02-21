<template>
  <div>
    <div class="Carousel">
      <div class="Carousel-content">
        <h1>近期豆瓣热门电影</h1>
        <div class="line"></div>
        <el-carousel :autoplay="false" class="carousel-detail">
          <el-carousel-item v-for="group in groups">
            <div class="imgUse">
              <div class="row">
                <div v-for="movie in group" :key="movie.id" class="imgContainer">
                  <img :src="movie.cover" referrerPolicy="no-referrer" />
                  <span class="title">
                    {{ movie.title }}
                  </span>
                  <span>
                    {{ movie.rate }}
                  </span>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movie';
import { ElCarousel, ElCarouselItem } from 'element-plus';
const movieStore = useMovieStore();
const groups = reactive([]);

onMounted(async () => {
  await movieStore.setMovie();
  const items = reactive(movieStore.movielist.subjects);
  const chunkSize = 10;
  for (let i = 0; i < items.length; i += chunkSize) {
    groups.push(items.slice(i, i + chunkSize));
  }
  console.log(groups);
});
</script>

<style scoped lang="less">
h1 {
  text-align: center;
}
:deep(.el-carousel__container) {
  position: relative;
  height: 770px;
  border: 4px solid #771b2f;
  border-radius: 2.5rem 2.5rem 0 0;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
}

:deep(.el-carousel__button) {
  background-color: #1264a3;
  height: 20px;
  border-radius: 5px;
}

.imgUse {
  max-width: 100%;
  overflow: hidden;

  h1 {
    text-align: center;
  }

  .row {
    display: flex !important;
    flex-wrap: wrap;
    padding: @padding-general 0 @padding-general @padding-general;
    padding-top: 3rem;

    img {
      width: 14rem;
      object-fit: cover;
    }

    .imgContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      max-width: 100%;
      max-height: 269px;
      margin: 0 2rem 8rem;

      span {
        margin-top: @padding-general;
        text-align: center;
        font-size: 0.9rem;
      }
    }
  }
}
@import url('@/views/Movie/styles/index.less');
</style>
