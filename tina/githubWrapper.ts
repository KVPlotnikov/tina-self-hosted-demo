import { GitHubProvider, GitHubProviderOptions } from "tinacms-gitprovider-github";
// export const githubWrapper = (args: GitHubProviderOptions) => {
//   console.log('Аргументы в гит провайдер',args)
//   return new GitHubProvider({ ...args });
// }

export class GithubWrapper {

  provider: GitHubProvider
  constructor(args: GitHubProviderOptions) {
    this.provider = new GitHubProvider({...args})
  }

  async onPut(key: string, value: string) {
    console.log("onPut key", key)
    console.log("onPuy value", value)
    await this.provider.onPut(key, value)
  }

  async onDelete(key: string) {
    console.log("onDelete key", key)
    await this.provider.onDelete(key)
  }
}