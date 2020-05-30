SFDX Plugin example - Project generator 🎉
================================

This simple example should demonstrate how a [yeoman generator](https://https://yeoman.io/) can be built into a SFDX Plugin. 

## 🤯 But Why ⁉️
If you're not using the default [SFDX Project structure](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm) or project templates like the [Falcon Project Template](https://github.com/sfdx-isv/sfdx-falcon-template) there might be a need to have customized starting points for your Implementations:
- 📋 Maybe you're an SI with specific guidelines
- 🤖 Want to fetch details from an org to autogenerate Readme's or metadata
- Build a custom directory structure 
- Prepopulate some CICD related files to speedup new Projects
  - use predefined 
- Initialize & link git repositories
  - Make it easy to set things up
- Reuse generic components
  - Trigger Framework on a new Org
  - Reusable LWC's
- Want to leverage other npm packages?
  - [husky](https://www.npmjs.com/package/husky)?
  - [scss](https://www.npmjs.com/package/node-sass)?

## Why a [SFDX plugin](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_plugins.meta/sfdx_cli_plugins/cli_plugins.htm)?
- **Short version:** for fun and to get a better understanding of what's possible
- **Long answer:**
  - Using to many tools might cause confusion
  - People might use different OS, IDE, Node version ...
  - Easily interact with Salesforce Data, Metadata, Tooling - API's

## 💡 What this plugin does
Showcase an easy way how to get your own project/templating generator...
- `pndx:generate:project` : Generate a super simple sample project in current directory

---

<!-- toc -->
* [Installation](#installation)
* [Clone this repository](#clone-this-repository)
* [Switch to the directory](#switch-to-the-directory)
* [Link the plugin](#link-the-plugin)
* [Check installation](#check-installation)
* [Usage](#usage)
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->

# Installation
<!-- install -->
Before installing this plugin make sure you have installed the [SFDX CLI](https://developer.salesforce.com/tools/sfdxcli) 

### Installing this plugin
```sh-session
# Clone this repository
$ git clone https://github.com/pnestvogel/sfdxplugin-baseproject-generator

# Switch to the directory
$ cd sfdxplugin-baseproject-generator

# Link the plugin
$ sfdx plugins:link .
sfdx-cli: linking plugin @pnestvogel/baseproject-generator...
sfdx-cli: linking plugin @pnestvogel/baseproject-generator... done

# Check installation
$ sfdx pndx
Temp

USAGE
  $ sfdx pndx:COMMAND

COMMANDS

TOPICS
  Run help for each topic below to view subcommands

  pndx:generate  Temp
```


# Usage
<!-- usage -->
```sh-session
$ npm install -g @pnestvogel/baseproject-generator
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
@pnestvogel/baseproject-generator/0.0.1 win32-x64 node-v12.15.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx pndx:generate:project -n <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pndxgenerateproject--n-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx pndx:generate:project -n <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Will generate a simple, hello-world-like sample project based on a template.

```
USAGE
  $ sfdx pndx:generate:project -n <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -n, --name=name                                                                   (required) [default: project-simple]
                                                                                    Generator Name to use.

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx pndx:generate:project
     ? Please enter your name (Someone) Mr. X
     ? Please enter your name Mr. X
     ...  
        create README.md
        create somefolderREADME.md
```

_See code: [lib\commands\pndx\generate\project.js](https://github.com/pnestvogel/sfdxplugin-baseproject-generator/blob/v0.0.1/lib\commands\pndx\generate\project.js)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->
# Debugging your plugin
We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `hello:org` command: 
1. Start the inspector
  
If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch: 
```sh-session
$ sfdx hello:org -u myOrg@example.com --dev-suspend
```
  
Alternatively, to call your command using the `bin/run` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:
```sh-session
$ NODE_OPTIONS=--inspect-brk bin/run hello:org -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program. 
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
<br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
Congrats, you are debugging!
