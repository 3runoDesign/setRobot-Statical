#setRobot-Front

##Getting Started

Installation

First of all, install the dependencies to run this boilerplate.

- NodeJS
- GulpJS
- Bower

```shell
# Clone this repository
$ git clone git@github.com:3runoDesign/setRobot-Front name_project
$ cd name_project

# install dependencies
$ npm run build
```

##Folders and Files

```shell
.
├── .bowerrc
├── .csscomb.json
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .scss-lint.yml
├── Gulpfile.js
├── README.md
├── bower.json
├─┬ gulpTasks
│ ├─┬ base
│ │ ├── clean.js
│ │ ├── connect.js
│ │ └── watch.js
│ ├─┬ build
│ │ ├── build-css.js
│ │ ├── build-revision.js
│ │ └── build-scripts.js
│ ├─┬ default
│ │ ├── assets.js
│ │ ├── lints.js
│ │ ├── providers.js
│ │ ├── pug.js
│ │ ├── sass.js
│ │ └── scripts.js
│ ├── error-handler.js
│ └── paths.js
├── package.json
├─┬ resources
│ ├─┬ images
│ │ └── sprite
│ ├─┬ sass
│ │ ├── _breakpoints.scss
│ │ ├── _setting-grid.scss
│ │ ├── _variables.scss
│ │ ├─┬ base # Bitters | http://bitters.bourbon.io/
│ │ ├─┬ core
│ │ │ ├── grid.scss
│ │ │ └── reset.scss
│ │ ├─┬ helper
│ │ │ ├── _align.scss
│ │ │ ├── _common.scss
│ │ │ ├── _grid.scss
│ │ │ ├── _image.scss
│ │ │ └── _select.scss
│ │ ├── main.scss
│ │ └─┬ modules
│ │   ├── footer.scss
│ │   ├── geral.scss
│ │   ├── header.scss
│ │   └── navigation.scss
│ ├─┬ scripts
│ │ ├── main.js
│ │ └─┬ partials # Used rigger | http://buildjs.github.io/rigger/
│ │   └── .gitkeep
│ └─┬ views
│   ├─┬ helpers
│   │ ├── _images-url.pug
│   │ └── bemto # BemTo | https://github.com/kizu/bemto
│   ├─┬ layouts
│   │ └── _base.pug
│   └─┬ partials
│     ├── _footer.pug
│     ├── _head.pug
│     └── _header.pug
└─┬ dist
  ├─┬ assets
  │ ├── css
  │ ├── fonts
  │ ├── images
  │ └── scripts
  ├── index.html
  └── rev-manifest.json
```

##Tasks
- `gulp ba:` compile all files
- `gulp ba --p`: compile all files to production
- `gulp bs`: compress image sprite files
- `gulp cw`: inicialize a server and watch
- `gulp js-lint`: validation JS
- `gulp scss-lint`: validation Scss

##License

This boilerplate is free and open source software, distributed under the The MIT License. So feel free to use this to create your site without linking back to me or using a disclaimer.
