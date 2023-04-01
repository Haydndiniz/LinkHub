export const ASSISTANT_ROLE = "assistant";
export const USER_ROLE = "user";

export enum GPTModel {
  GPT3 = "gpt-3.5-turbo",
  GPT4 = "gpt-4",
}

export interface IMessage {
  isChatGPT: boolean;
  text: string;
  data?: any;
}
