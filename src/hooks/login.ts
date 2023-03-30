import { userLogin, userRegister } from '@/api/login';
import { useStore } from '@/stores/main';
import { setItem } from '@/utils/storage';
import { validateUsername, validatePassword, validateNickName } from '@/utils/validate';
import { useMouse } from '@vueuse/core'; //检测鼠标位置和是否按下
import { ElForm, ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

export const userRegisterProp = () => {
  const formRegister = reactive({
    username: '',
    password: '',
    nickname: ''
  });
  type FormInstance = InstanceType<typeof ElForm>;
  const ruleFormRegisterRef = ref<FormInstance | null>();
  return {
    formRegister,
    ruleFormRegisterRef
  };
};

export const useLoginProp = () => {
  const userStore = useStore();
  const router = useRouter();
  const isBlur = ref(false);
  const { x, y } = useMouse();
  const target = ref(null);
  const form = reactive({
    username: '',
    password: ''
  });
  type FormInstance = InstanceType<typeof ElForm>;
  const ruleFormRef = ref<FormInstance | null>();
  return {
    userStore,
    router,
    isBlur,
    x,
    y,
    target,
    form,
    ruleFormRef
  };
};

export const userRegisterMethod = (logOrReg: any, formRegister: any) => {
  type FormInstance = InstanceType<typeof ElForm>;
  const submitRegForm = (formEl: FormInstance | null) => {
    if (!formEl) return;
    formEl.validate(async valid => {
      if (valid) {
        const regParams = {
          username: formRegister.username,
          password: formRegister.password,
          nickname: formRegister.nickname
        };
        const result = await userRegister(regParams);
        if (result.data.code === 200) {
          console.log('注册成功');
          logOrReg.value = true;
        } else {
          ElMessage.error('注册失败,请检查再提交');
          return false;
        }
      }
    });
  };
  return { submitRegForm, logOrReg };
};

export const useLoginMethod = (userStore: any, router: any, form: any) => {
  type FormInstance = InstanceType<typeof ElForm>;
  const submitForm = (formEL: FormInstance | null) => {
    if (!formEL) return;
    formEL.validate(async valid => {
      if (valid) {
        const loginParams = { username: form.username, password: form.password };
        //提交请求
        const result = await userLogin(loginParams);
        if (result.data.code === 200) {
          console.log('获取成功');
          userStore.user.token = result.data.token;
          setItem('user', userStore.user.token);
          router.push('/index');
        } else {
          ElMessage.error(result.data.msg);
        }
      } else {
        ElMessage.error('用户名或密码错误~请重新输入');
        return false;
      }
    });
  };
  return { submitForm };
};

export const useRoles = () => {
  //登陆验证规则
  const rules = reactive({
    username: [{ validator: validateUsername, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }]
  });
  return {
    rules
  };
};

export const useRegRoles = () => {
  const regRules = reactive({
    username: [{ validator: validateUsername, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
    nickname: [{ validator: validateNickName, trigger: 'blur' }]
  });
  return {
    regRules
  };
};
