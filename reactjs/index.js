var express = require('express');

var app = express();
app.use('/', express.static('public'));

app.use('/results', function(){
    
})


var server = app.listen(3000, function() {
    console.log("server started at port 3000");
});

