const app = require('express')();

app.get('/',function(req,res){
	res.send('hello bro');
});

app.listen(3000);
