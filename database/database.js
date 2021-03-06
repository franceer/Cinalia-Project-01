'use strict';

//Setup env
require('dotenv').config({ silent: true });
var config = require('./knexfile.js');
var env = process.env.NODE_ENV;

if (env === 'production') {
    var pg = require('pg');
    pg.defaults.ssl = true;
}

var knex = require('knex')(config[env]);

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin(require('bookshelf-modelbase').pluggable);
bookshelf.plugin('registry');
bookshelf.plugin('pagination');
bookshelf.plugin('virtuals');
module.exports = bookshelf;