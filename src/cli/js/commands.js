const program = require('commander');

const methods = require('./methods.js');

program.version('0.0.6');

program
    .command('create template')
    .alias('c')
    .option('--nbs', 'add no bullshit')
    .option('--scss', 'add SCSS')
    .option('--sass', 'add SASS')
    .option('--vue', 'add Vue')
    .action(methods.createTemplate);

program.parse(process.argv);
