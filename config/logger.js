
var env = process.env.NODE_ENV || "development"

var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/nodeWeb.log', category: 'nodeWeb' }
  ]
});

var logger = log4js.getLogger('nodeWeb');
logger.setLevel(true && env !== 'test' ? 'DEBUG' : 'ERROR')

module.exports = logger;
