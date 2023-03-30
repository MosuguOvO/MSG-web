import { computed } from 'vue';
import { useRouter } from 'vue-router';

export const useComponentDisplay = () => {
  const router = useRouter();
  let color = ref('');
  const isMatched = computed(() => {
    const currentPath = router.currentRoute.value.path;
    const targetPath = '/index';
    if (currentPath === targetPath) {
      // return '#f4ede4'
      color.value = '#f4ede4';
    } else {
      // return 'white'
      color.value = 'white';
    }
    return currentPath === targetPath;
  });
  return {
    isMatched,
    color
  };
};

export const useComponentWidth = () => {
  const router = useRouter();
  const footWidth = computed(() => {
    const currentPath = router.currentRoute.value.path;
    const targetPath = '/index';
    if (currentPath === targetPath) {
      // return '#f4ede4'
      return '100%';
    } else {
      // return 'white'
      return '75%';
    }
  });
  return {
    footWidth
  };
};
