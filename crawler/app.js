var request = require('request')
var fs = require('fs')
var config = require('./config')
var Joke = require('./model/joke')

var joke = new Joke({ content: 'why' })
joke.save().catch(err => {
    console.log(err)
})