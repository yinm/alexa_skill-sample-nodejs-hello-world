'use strict';
const Alexa = require('alexa-sdk');

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  'LaunchRequest': function() {
    this.emit('SayHello');
  },
  'HelloWorldIntent': function() {
    this.emit('SayHello');
  },
  'SayHello': function() {
    this.emit(':tell', 'Hello World!');
  }
};
