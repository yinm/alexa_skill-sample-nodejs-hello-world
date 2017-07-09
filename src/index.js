'use strict';
const Alexa = require('alexa-sdk');

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  'LaunchRequest': () => {
    this.emit('SayHello');
  },
  'HelloWorldIntent': () => {
    this.emit('SayHello');
  },
  'SayHello': () => {
    this.emit(':tell', 'Hello World!');
  }
};
