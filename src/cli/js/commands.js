const program = require('commander');

const methods = require('./methods.js');

program.version('0.0.5');

program
    .command('create template')
    .alias('c')
    .option('-v, --vue', 'add Vue')
    .option('-n, --nbs', 'add no bullshit')
    .action(methods.createTemplate);

program.parse(process.argv);
