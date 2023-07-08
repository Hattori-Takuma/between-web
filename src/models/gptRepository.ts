import { httpsCallable } from 'firebase/functions';
import { functions } from '../plugins/firebase';

export class GptRepository {
  /**
   * GPTからのメッセージを受信する
   * @param message
   * @returns
   */
  async createGptMessage(message: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const func = await httpsCallable(
          functions,
          'between-v1-Gpt35-getMessage'
        );
        await func({ message }).then((res: any) => {
          resolve(res.data as any);
        });
      } catch (error) {
        console.log(
          '🚀 ~ file: gptRepository.ts:30 ~ GptRepository ~ returnnewPromise ~ error:',
          error
        );
        reject(error);
      }
    });
  }
}


