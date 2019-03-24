const program = require('commander');

const methods = require('./methods.js');

program.version('0.0.1');

program
    .command('create template')
    .alias('c')
    .option('-v, --vue', 'add Vue')
    .action(methods.createTemplate);

program.parse(process.argv);
