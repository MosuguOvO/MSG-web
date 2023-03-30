import { debounce } from './tools';

export default function () {
  const newfun = () => {
    //获取根元素
    const docElement = document.documentElement || document.body;
    //使用文档元素的客户端宽度和设计宽度（1920）来计算比例，然后将字体大小设置为比例乘以14。如果比例乘以14小于10，则将字体大小设置为10px，否则将字体大小设置为比例乘以14的值，并加上px单位。
    const clientWidth = docElement.clientWidth,
      designWidth = 1920;
    docElement.style.fontSize =
      (clientWidth / designWidth) * 14 < 10 ? 10 + 'px' : (clientWidth / designWidth) * 14 + 'px';
  };
  //使用 debounce 函数来监听窗口的 resize 事件，并且在 500 毫秒内只触发一次 newfun 函数。这样可以提高性能，避免窗口调整大小时因为 resize 事件过于频繁而导致的性能问题。
  window.addEventListener('resize', debounce(500, newfun));
  newfun();
}
