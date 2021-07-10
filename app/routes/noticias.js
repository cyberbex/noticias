module.exports = function(app){
    
    
    app.get('/noticias', function(req,res){
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host : '18.231.188.23',
            user : 'root',
            password : 'cyberbex88',
            database : 'portal_noticias'
        });
    
        connection.query('select * from noticias', function(error, result){
            res.send(result);
        });
        //res.render('noticias/noticias');
    });
}