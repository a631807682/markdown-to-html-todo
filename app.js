// const showdown = require('showdown'),
//     fs = require('co-fs'),
//     co = require('co'),
//     http = require('http'),
//     open = require('open'),
//     jquery = require('jquery'),
//     thunkify = require('thunkify'),
//     jsdom = require('jsdom'),
//     path = require('path');

// const converter = new showdown.Converter();

// /**
//  * 添加自定义样式
//  * @param {[type]} $ [jquery window]
//  */
// let addClass = function($) {
//     $('body table').each(function() {
//         $(this).addClass("table table-striped");
//     });
// }

// /**
//  * md生成html
//  * @param {[type]} name          [description]
//  */
// let generate = function*(name) {
//     name = path.basename(name, '.md');
//     //markdown生成html
//     let text = yield fs.readFile(`./data/${name}.md`, 'utf8');
//     // let markdownHtml = markdown.toHTML(text);
//     let markdownHtml = converter.makeHtml(text);

//     //模板
//     let layout = yield fs.readFile('./layout.html', 'utf8');

//     //生成html内容
//     let coEnv = thunkify(jsdom.env);
//     let jsWindow = yield coEnv(layout);
//     let $ = jquery(jsWindow);
//     // let jsWindow = yield coEnv(layout, ["./lib/jquery/jquery.js"]);

//     $('body').append(markdownHtml);
//     addClass($); //添加样式

//     let result = $('html').html();
//     //生成html文件
//     fs.writeFile(`./doc/${name}.html`, result, 'utf8');
//     console.log(`generate ${name}.html`)
// };

// co(function*() {
//     let folder = yield fs.readdir('./data');
//     for (let name of folder) {
//         yield generate(name);
//     }
// }).then(success => console.log('success'), err => console.log('err=====>', err));
