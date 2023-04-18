import { GptRepository } from './gptRepository';

export const createGptMessage = async (message: string): Promise<any> => {
  try {
    const repo = new GptRepository();
    return await repo.createGptMessage(message);
  } catch (err) {
    return null;
  }
};
