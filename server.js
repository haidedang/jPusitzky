var express = require('express');


var app = express();
var server   = require('http').Server(app);

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(__dirname+'/index.html') )

app.set('port', (process.env.PORT || 3000));

server.listen(app.get('port'), function(){
    console.log('Server started on port ' + app.get('port'));
});

module.exports = app;
