var express = require('express');
magic = require('./magic');
cors = require('cors'); 
var app = express();

 
app.configure(function () {

  app.use(express.logger('dev'));    
  app.use(cors());
  app.use(express.bodyParser());
});
 

app.post('/magic', magic.changeUrl);

 

app.listen(3000);
console.log('Listening on port 3000...');
