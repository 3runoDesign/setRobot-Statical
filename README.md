# SetRobot Statical site generator
A static website generator/rapid prototyping using Gulp for heavy tasks.

## Requirements:
* [Node]( https://nodejs.org/download/ )

## Installation:
* run `npm install` to install all node dependencies
* run `gulp` to build the app and start watching!
* run `gulp build --p` to create a production build

## Tasks
* `gulp build` #Compilação normal para produção
* `gulp build --p` #Compilação minificada para produção
* `gulp build --production` #Compilação minificada para produção
* `gulp cw` #Tarefas para durante o desenvolvimento


## Features:
* **Sass/CSS**:
  * Blazing fast Node Sass(libsass) parser
  * CSS prefixing with [autoprefixer](https://github.com/postcss/autoprefixer)
  * CSS minifying with [cssnano](http://cssnano.co/)
  * CSS code beautiful [csscomb](http://csscomb.com/)
* **Javascript**:
  * [Rigger](https://github.com/kuzyk/gulp-rigger)
* **Templating**:
  * [Pug templating language](https://pugjs.org) with partials support
* **Development**:
  * File watching and livereloading synchronized across multiple browsers/devices with [BrowserSync](https://www.browsersync.io/)
* **Deployment**:
  * Coming soon
* **Sass Packages**:
  * Includes the following Sass packages by default:
    * [Bourbon]( http://bourbon.io/ )
    * [Bitters](http://bitters.bourbon.io/)
    * [Bootstrap - GRID]( https://github.com/jojoee/bootstrap-sass-grid )
* **Images**:
  * Image minifying with imagemin
  * Compiles sprites from all files in the `assets/sprite` directory
* **Revisioning/cache busting**:
  Cache busting static assets for production with [gulp-rev](https://github.com/sindresorhus/gulp-rev)
  
# Licensing
Copyright (c) 2016 - 2017 Bruno Fernando. Licensed under the MIT license(MIT)
