// 这个函数检测一个键是否是一个对象的有效键。它接受两个参数：一个键（字符串、数字或符号）和一个对象。它返回一个布尔值，表示键是否是对象的有效键。它还使用了 TypeScript 的 keyof 类型，以确保键是对象的有效键。
export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}

// 这段代码用于将一个字符串中的大写字母转换为小写字母，并在转换后添加一个横线。它会遍历传入的val字符串，检查每个字符的字符编码，如果字符编码大于65（即A）并且小于90（即Z），则将该字符转换为小写，并在前面添加一个横线，然后将转换后的字符添加到res变量中(将驼峰命名法转换为带_连接的)
export const humpToLine = (val: string) => {
  if (val === val.toLowerCase()) {
    return val;
  } else {
    let res = '';
    for (let i = 0; i < val.length; i++) {
      if (val.charCodeAt(i) > 65 && val.charCodeAt(i) < 90) {
        res += `-${val[i].toLowerCase()}`;
      } else {
        res += val[i];
      }
    }
    return res;
  }
};

//节流函数(一定时间内触发有频率限制)
export const throttle = (time: number, fn: () => any) => {
  let flag = true;
  return function (...args: any) {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args); //this参数用户指定函数中this的值,也就是this指向fn(调用函数)
      flag = true;
    }, time);
  };
};

//防抖函数(规定时间内只触发一次)
export const debounce = (time: number, fn: () => any) => {
  const timmer = null;
  return function (...args: any) {
    clearTimeout(timmer);
    setTimeout(() => {
      fn.apply(this.args);
    }, time);
  };
};
