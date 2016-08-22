'use strict';

let bookshelf = require('../database/database')
    , bcrypt = require('bcrypt-nodejs')
    , Promise = require('bluebird')
	, checkit = require('checkit');

require('./video-media');
require('./user-type');
require('./bookmark');

var User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    initialize: function(){
        this.on('creating', this.generateHash, this.validateSave);
    },

    videoMedias: function(){
        return this.belongsToMany('VideoMedia');
    },

    type : function(){
        return this.belongsTo('UserType');
    },
	
	bookmarks: function(){
		return this.hasMany('Bookmark');
	},

    isAdmin: function () {
        return this.related('type').get('name') === 'admin';
    },

    generateHash: function () {
        let model = this;
        let promiseHash = Promise.promisify(bcrypt.hash);
        return promiseHash(model.get('password'), null, null)
        .then(function (hash) {
            model.set('password', hash);
        }).catch(function (err) {
            throw new Error(err);
        });
    },

    validatePassword : function(password) {
        return bcrypt.compareSync(password, this.password);
    },
	
	validations: {
		username: ['required', 'email'],
		firstname: 'required',
		lastname: 'required'
	},
	
	validateSave: function(){
		return checkit(this.validations).run(this.attributes);
	}
},
{ login: Promise.method(function(email, password) {
    if (!email || !password) 
        throw new Error('Email and password are both required');
    
    return new this({ username: email.toLowerCase().trim() }).fetch({ withRelated: 'type', require: true })
        .tap(function (user) {
            let promiseCompare = Promise.promisify(bcrypt.compare);
            return promiseCompare(password, user.get('password')).then(function (res) {
                if (!res) throw new Error('Invalid password');
            });
        });        
    })
});

module.exports = bookshelf.model('User', User);