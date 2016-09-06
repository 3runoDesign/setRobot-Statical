'use strict';

var path           = require('path');
var pathToThisFile = __dirname;
var root           = path.dirname(pathToThisFile);

var fs             = require( 'graceful-fs' );
var bowerrc        = JSON.parse( fs.readFileSync( root + '/.bowerrc' ) )

var destination    = root + '/dist';
var resources      = root + '/resources';
var bowerDirectory = bowerrc.directory;


module.exports     = {
    to: {
        destination: destination,
        bowerDirectory: bowerDirectory,

        sass: {
            source: resources + '/sass/**/*.scss',
            main: resources + '/sass/main.scss',
            destination: destination + '/assets/css',
            includes : [
                bowerDirectory + '/bourbon/app/assets/stylesheets/',
                bowerDirectory + '/neat/app/assets/stylesheets/',
                bowerDirectory + '/family.scss/source/src/'
            ]
        },

        pug: {
            source: resources + '/views/**/*.pug',
            pages: resources + '/views/*.pug',
            destination: destination
        },

        scripts: {
            source: resources + '/scripts/**/*.js',
            main: resources + '/scripts/main.js',
            destination: destination + '/assets/scripts'
        },

        fonts: {
            source: resources + '/fonts/**/*.{eot,svg,ttf,woff,woff2}',
            vendor: bowerDirectory + '/**/*.{eot,svg,ttf,woff,woff2}',
            destination: destination + '/assets/fonts'
        },

        images: {
            source: resources + '/images/**/*.*',
            sprite: resources + '/images/sprite/*.png',
            destination: destination + '/assets/images'
        }
    }
};
