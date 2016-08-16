'use strict';

let bookshelf = require('../database/database');

require('./media-genre');
require('./social-data');
require('./worker');
require('./set');
require('./look');
require('./product');
require('./products-in-video-media');
require('./location');

var VideoMedia = bookshelf.Model.extend({
    tableName: 'video_medias',
    hasTimestamps: true,

    mediaGenre: function () {
        return this.belongsTo('MediaGenre');
    },

    socialData: function(){
        return this.belongsTo('SocialData');
    },

    //todo: to be removed ?
    workingTeam: function(){
        return this.belongsToMany('Worker');
    },

    sets: function () {
        return this.hasMany('Set');
    },

    looks: function () {
        return this.hasMany('Look');
    },

    products: function () {
        return this.belongsToMany('Product').through('ProductsInVideoMedia').withPivot(['time_codes', 'appearing_context']);
    },

    locations: function () {
        return this.belongsToMany('Location').withPivot(['time_codes', 'appearing_context']);
    }
});

module.exports = bookshelf.model('VideoMedia', VideoMedia);