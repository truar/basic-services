var pjson = require('../package.json');

module.exports = function(app) {
    app.get('/ping', function(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.send('PING ! Basic services up and running. Version = ' + pjson.version);
    });
}