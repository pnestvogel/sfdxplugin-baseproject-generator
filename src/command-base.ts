import { SfdxCommand } from '@salesforce/command';
import {createEnv} from 'yeoman-environment'

export default abstract class CommandBase extends SfdxCommand {
  protected async generate(type: string, generatorOptions: object = {}) {
    const env = createEnv()

    env.register(
      require.resolve(`./generators/${type}`),
      `pndx:${type}`
    )

    await new Promise((resolve, reject) => {
      env.run(`pndx:${type}`, generatorOptions, (err: Error, results: any) => {
        if (err) reject(err)
        else resolve(results)
      })
    })
  }
}