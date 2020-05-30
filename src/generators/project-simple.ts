import * as path from 'path'
import * as Generator from 'yeoman-generator'
import yosay = require('yosay')
const inquirer = require('inquirer')

class CommandGenerator extends Generator {

  constructor(args: any, options) {
    super(args, options)
  }

  async prompting() {

    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name",
        default: "Someone"
      },
    ]);
    this.options.name = answers.name

    this.log(yosay(`Thanks for using this demo ${answers.name}`))

  }

  writing() {
    this.sourceRoot(path.join(__dirname, '../../templates'))
    
    const opts = { options: this.options }
    this.fs.copyTpl(this.templatePath('simple-project/README.md.ejs'), this.destinationPath('README.md'), opts);
    this.fs.copy(this.templatePath('simple-project/staticfolders'), this.destinationPath('.'));
  }

  end() {

  }
}

export = CommandGenerator