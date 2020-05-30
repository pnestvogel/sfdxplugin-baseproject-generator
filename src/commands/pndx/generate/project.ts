import { flags } from '@salesforce/command';
import { AnyJson } from '@salesforce/ts-types';
import Base from '../../../command-base'

export default class ProjectGenerator extends Base {

  public static description = 'Will generate a simple, hello-world-like sample project based on a template.';

  public static examples = [
    `$ sfdx pndx:generate:project
  ? Please enter your name (Someone) Mr. X
  ? Please enter your name Mr. X
  ...  
     create README.md
     create somefolder\README.md
  `
  ];

  public static args = [{ name: 'file' }];

  protected static flagsConfig = {
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'Generator Name to use.', required: true, default: 'project-simple' }),
  };

  public async run(): Promise<AnyJson> {
    try {

      await super.generate(this.flags.name, {});

    } catch (error) {
      this.ux.error(error);
    }
    return {};
  }
}
