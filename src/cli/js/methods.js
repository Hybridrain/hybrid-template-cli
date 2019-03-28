const path = require('path');
const chalk = require('chalk');
const figlet = require('figlet');

const fs = require('fs');

var html = `<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>hybridrain//template</title>
        <meta name="author" content="hybridrain">
        <meta name="description" content="hybridrain//template">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <header>Hello World!</header>
        <nav></nav>
        <main></main>
        <footer></footer>
        <script src="js/main.js"></script>
    </body>
</html>
`;

var htmlVue = `<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>hybridrain//template</title>
        <meta name="author" content="hybridrain">
        <meta name="description" content="hybridrain//template">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
        <script src="js/components.js"></script>
        <script src="js/page-components.js"></script>
        <script src="js/routing.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
`;

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
`;

function createTemplate(dir, args){
    console.log(figlet.textSync('hybridrain//Template'));
    fs.mkdir('css/vendor', { recursive: true }, function (err) {
        if (err) throw err;
        console.log('css/vendor');
        fs.writeFile('css/main.css', css, function (err) {
            if (err) throw err;
            console.log('main.css');
        });
    });
    if (args.vue) {
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
        fs.writeFile('index.html', htmlVue, function (err) {
            if (err) throw err;
            console.log('index.html + Vue.js');
        });
    }
    else {
        fs.writeFile('index.html', html, function (err) {
            if (err) throw err;
            console.log('index.html');
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

exports.createTemplate = createTemplate;
