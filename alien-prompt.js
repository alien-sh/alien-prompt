const chalk = require('chalk')

const prompt = chalk.rgb(121, 193, 169)('\ue36e ') + chalk.rgb(237, 143, 17)('>')
const newline = chalk.rgb(147, 224, 190)('...')
const continuation = chalk.rgb(47, 104, 159)('...')

module.exports = core => {
  core.repl.prompt = prompt
  core.repl.newline = newline
  core.repl.continuation = continuation
  core.repl.clear()
  core.repl.preprint()
  core.repl.print()
}