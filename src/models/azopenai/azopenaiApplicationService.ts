import { AzOpenaiRepository } from './azopenaiRepository';

export const getAzOpenAIData = async (context: string) => {
  try {
    const repo = new AzOpenaiRepository();
    return await repo.getAzOpenAIData(context);
  } catch (err) {
    return err;
  }
};

export const getBetween = async (add1: string, add2: string) => {
  try {
    const repo = new AzOpenaiRepository();
    return await repo.getBetween(add1, add2);
  } catch (err) {
    return err;
  }
};
