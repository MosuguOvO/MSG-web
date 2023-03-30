declare global {
  interface MessageData {
    id: number;
    nickname: string;
    messageboard: string;
    is_delete: string;
    data: Array;
  }

  interface MessageRootObject {
    status: number;
    statusText: string;
    data: MessageData[];
  }
}

export {};
