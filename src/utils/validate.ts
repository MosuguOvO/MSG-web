//账户验证规则
export const validateUsername = (rule: any, value: any, callback: any) => {
  value as string;
  const reg = new RegExp(/^[A-Za-z0-9]+/);
  if (value === '') {
    callback(new Error('用户名不能为空~'));
  } else if (value.length < 6 || value.length > 15) {
    callback(new Error('用户名长度在6~15之间'));
  } else if (!reg.test(value)) {
    callback(new Error('只能输入大小字母和数字~'));
  } else {
    callback();
  }
};

//密码验证规则
export const validatePassword = (rule: any, value: any, callback: any) => {
  const reg = new RegExp(/[a-zA-Z0-9!?]+/);
  if (value === '') {
    callback(new Error('密码不能为空~'));
  } else if (value.length < 6 || value.length > 15) {
    callback(new Error('密码的长度应在6~15之间'));
  } else if (!reg.test(value)) {
    callback(new Error('密码不能包含特殊字符(!?可用)'));
  } else {
    callback();
  }
};

export const validateNickName = (rule: any, value: any, callback: any) => {
  const reg = new RegExp(/[a-zA-Z0-9]+/);
  if (value === '') {
    callback(new Error('昵称不能为空'));
  } else if (value.length < 6 || value.length > 15) {
    callback(new Error('长度在6~15之间'));
  } else if (!reg.test(value)) {
    callback(new Error('只能输入字母,数字'));
  } else {
    callback();
  }
};
