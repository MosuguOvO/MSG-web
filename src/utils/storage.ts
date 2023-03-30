//这段代码定义了一个名为setItem的函数，该函数接受两个参数，一个是字符串类型的key，另一个是任何类型的item。如果item是一个对象，则使用JSON.stringify将其转换为字符串，然后将其存储在localStorage中。如果item是一个字符串，则尝试将其存储到localStorage中，如果失败，则抛出一个错误
export const setItem = (key: string, item: any): void => {
  //void表示没返回值
  if (typeof item === 'object') {
    localStorage.setItem(key, JSON.stringify(item));
  } else if (typeof item === 'string') {
    try {
      localStorage.setItem(key, item);
    } catch (error) {
      throw new Error('设置的字符串错了~');
    }
  }
};

//获取本地存储
export const getItem = (key: string): any => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return null;
    } else {
      return JSON.parse(item);
    }
  } catch (error) {
    return localStorage.getItem(key);
  }
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};
