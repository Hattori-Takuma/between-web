import { AzOpenaiRepository } from './azopenaiRepository';

export const getAzOpenAIData = async (context: string) => {
  try {
    const repo = new AzOpenaiRepository();
    return await repo.getAzOpenAIData(context);
  } catch (err) {
    return err;
  }
};
