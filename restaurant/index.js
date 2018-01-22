var express= require('express');

var app= express();
app.use('/', express.static('public'));
//we can mock a file data into a url without showing it as json file
// app.use('/menu', function(request,response){
//     response.sendFile(__dirname + "/public/menu.json");
// });

var server=app.listen(3000,function(){
    console.log("server started at port 3000");
})