import { AzureKeyCredential, OpenAIClient } from '@azure/openai';

export class AzOpenaiRepository {
  async getAzOpenAIData(context: string) {
    console.log('start', process.env.AZURE_OPENAI_ENDPOINT!);
    return new Promise(async (resolve, reject) => {
      const endpoint = process.env.AZURE_OPENAI_ENDPOINT!;
      const azureApiKey = process.env.AZURE_OPENAI_API_KEY!;
      const deploymentId = process.env.AZURE_OPENAI_DEPLOYMENT_ID!;
      const content = `
      ${context}
      #上記の周辺で美味しい居酒屋を教えて
      `;
      try {
        const messages = [
          { role: 'system', content: 'You are a helpful assistant.' },
          {
            role: 'user',
            content,
          },
        ];
        const client = new OpenAIClient(
          endpoint,
          new AzureKeyCredential(azureApiKey)
        );

        console.log('ここまではきている******');

        const result = await client.getChatCompletions(deploymentId, messages);
        resolve(result.choices);
      } catch (error: any) {
        console.log(
          '🚀 ~ file: openaiRepository.ts:29 ~ AzOpenaiRepository ~ returnnewPromise ~ error:',
          error
        );
        reject(error);
      }
    });
  }
}
