const path = require('path');
const chalk = require('chalk');
const figlet = require('figlet');

const fs = require('fs');

var css = `* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
}

h1, h2, h3, h4, h5, h6, p, a, span {
    margin: 0;
}
`

function createStandardTemplate(nbs){
    let htmlBeginningNBS;
    let htmlStandardNBS;
    let htmlEndingNBS;
    if(nbs){
        fs.readFile(path.resolve(__dirname, '../../../src/template/html/index-beginning-nbs.html'), (err, data) => {
            if (err) throw err;
            htmlBeginningNBS = data;
            fs.readFile(path.resolve(__dirname, '../../../src/template/html/standard-nbs.html'), (err, data) => {
                if (err) throw err;
                htmlStandardNBS = data;
                fs.readFile(path.resolve(__dirname, '../../../src/template/html/index-ending.html'), (err, data) => {
                    if (err) throw err;
                    htmlEndingNBS = data;
                    fs.writeFile('index.html', `${htmlBeginningNBS}${htmlStandardNBS}${htmlEndingNBS}`, function (err) {
                        if (err) throw err;
                        console.log('index.html - Bullshit');
                    });
                });
            });
        });
        fs.mkdir('js', { recursive: true }, function (err) {
            if (err) throw err;
            console.log('js');
            fs.writeFile('js/main.js', '', function (err) {
                if (err) throw err;
                console.log('main.js - Bullshit');
            });
        });
    }
    else {
        let htmlBeginning;
        let htmlStandard;
        let htmlEnding;
        fs.readFile(path.resolve(__dirname, '../../../src/template/html/index-beginning.html'), (err, data) => {
            if (err) throw err;
            htmlBeginning = data;
            fs.readFile(path.resolve(__dirname, '../../../src/template/html/standard.html'), (err, data) => {
                if (err) throw err;
                htmlStandard = data;
                fs.readFile(path.resolve(__dirname, '../../../src/template/html/index-ending.html'), (err, data) => {
                    if (err) throw err;
                    htmlEnding = data;
                    fs.writeFile('index.html', `${htmlBeginning}${htmlStandard}${htmlEnding}`, function (err) {
                        if (err) throw err;
                        console.log('index.html');
                    });
                });
            });
        });
        fs.mkdir('js/vendor', { recursive: true }, function (err) {
            if (err) throw err;
            console.log('js/vendor');
            fs.writeFile('js/main.js', 'console.log("main.js works!");', function (err) {
                if (err) throw err;
                console.log('main.js');
            });
        });
    }
}

function createVueTemplate(nbs){
    if(nbs){
        fs.mkdirSync('js', { recursive: true }, function (err) {
            if (err) throw err;
            console.log('js');
        });
        fs.writeFile('js/main.js', '', function (err) {
            if (err) throw err;
            console.log('main.js - Bullshit');
        });
        let htmlBeginningNBS;
        let htmlVueNBS;
        let htmlEndingNBS;
        fs.readFile(path.resolve(__dirname, '../../../src/template/html/index-beginning-nbs.html'), (err, data) => {
            if (err) throw err;
            htmlBeginningNBS = data;
            fs.readFile(path.resolve(__dirname, '../../../src/template/html/vue-nbs.html'), (err, data) => {
                if (err) throw err;
                htmlVueNBS = data;
                fs.readFile(path.resolve(__dirname, '../../../src/template/html/index-ending.html'), (err, data) => {
                    if (err) throw err;
                    htmlEndingNBS = data;
                    fs.writeFile('index.html', `${htmlBeginningNBS}${htmlVueNBS}${htmlEndingNBS}`, function (err) {
                        if (err) throw err;
                        console.log('index.html - Bullshit');
                    });
                });
            });
        });
    }
    else {
        let htmlBeginning;
        let htmlVue;
        let htmlEnding;
        let vueFileText;
        fs.mkdirSync('js/vendor', { recursive: true }, function (err) {
            if (err) throw err;
            console.log('js/vendor');
        });
        fs.readFile(path.resolve(__dirname, '../../../src/template/js/components.js'), (err, data) => {
            if (err) throw err;
            fs.writeFile('js/components.js', data, function (err) {
                if (err) throw err;
                console.log('components.js');
            });
        });
        fs.readFile(path.resolve(__dirname, '../../../src/template/js/page-components.js'), (err, data) => {
            if (err) throw err;
            fs.writeFile('js/page-components.js', data, function (err) {
                if (err) throw err;
                console.log('page-components.js');
            });
        });
        fs.readFile(path.resolve(__dirname, '../../../src/template/js/routing.js'), (err, data) => {
            if (err) throw err;
            fs.writeFile('js/routing.js', data, function (err) {
                if (err) throw err;
                console.log('routing.js');
            });
        });
        fs.readFile(path.resolve(__dirname, '../../../src/template/js/vue.js'), (err, data) => {
            if (err) throw err;
            vueFileText = data;
            fs.readFile(path.resolve(__dirname, '../../../src/template/js/main.js'), (err, data) => {
                if (err) throw err;
                fs.writeFile('js/main.js', `${data}\n${vueFileText}`, function (err) {
                    if (err) throw err;
                    console.log('main.js');
                });
            });
        });
        fs.readFile(path.resolve(__dirname, '../../../src/template/html/index-beginning.html'), (err, data) => {
            if (err) throw err;
            htmlBeginning = data;
            fs.readFile(path.resolve(__dirname, '../../../src/template/html/vue.html'), (err, data) => {
                if (err) throw err;
                htmlVue = data;
                fs.readFile(path.resolve(__dirname, '../../../src/template/html/index-ending.html'), (err, data) => {
                    if (err) throw err;
                    htmlEnding = data;
                    fs.writeFile('index.html', `${htmlBeginning}${htmlVue}${htmlEnding}`, function (err) {
                        if (err) throw err;
                        console.log('index.html');
                    });
                });
            });
        });
    }
}

function createTemplate(dir, args){
    console.log(figlet.textSync('hybridrain//Template'));
    if(args.nbs){
        fs.mkdirSync('css', { recursive: true }, function (err) {
            if (err) throw err;
            console.log('css');
        });
        fs.writeFile('css/main.css', '', function (err) {
            if (err) throw err;
            console.log('main.css - bullshit');
        });
        if(args.scss){
            fs.writeFile('css/main.scss', '', function (err) {
                if (err) throw err;
                console.log('main.scss - bullshit');
            });
        }
        else if(args.sass){
            fs.writeFile('css/main.sass', '', function (err) {
                if (err) throw err;
                console.log('main.sass - bullshit');
            });
        }
    }
    else {
        fs.mkdirSync('css/vendor', { recursive: true }, function (err) {
            if (err) throw err;
            console.log('css/vendor');
        });
        fs.readFile(path.resolve(__dirname, '../../../src/template/css/main.css'), (err, data) => {
            if (err) throw err;
            fs.writeFile('css/main.css', data, function (err) {
                if (err) throw err;
                console.log('main.css');
            });
        });
        if(args.scss){
            fs.readFile(path.resolve(__dirname, '../../../src/template/css/main.css.map'), (err, data) => {
                if (err) throw err;
                fs.writeFile('css/main.css.map', data, function (err) {
                    if (err) throw err;
                    console.log('main.css.map');
                });
            });
            fs.readFile(path.resolve(__dirname, '../../../src/template/css/main.scss'), (err, data) => {
                if (err) throw err;
                fs.writeFile('css/main.scss', data, function (err) {
                    if (err) throw err;
                    console.log('main.scss');
                });
            });
        }
        else if(args.sass){
            fs.readFile(path.resolve(__dirname, '../../../src/template/css/main.css.map'), (err, data) => {
                if (err) throw err;
                fs.writeFile('css/main.css.map', data, function (err) {
                    if (err) throw err;
                    console.log('main.css.map');
                });
            });
            fs.readFile(path.resolve(__dirname, '../../../src/template/css/main.sass'), (err, data) => {
                if (err) throw err;
                fs.writeFile('css/main.sass', data, function (err) {
                    if (err) throw err;
                    console.log('main.sass');
                });
            });
        }
    }
    if (args.vue) {
        createVueTemplate(args.nbs);
    }
    else {
        createStandardTemplate(args.nbs);
    }
}

exports.createTemplate = createTemplate;
