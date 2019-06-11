const app = require('express')();

app.get('/',function(req,res){
	res.send('hello brother');
});

app.listen(3000);
