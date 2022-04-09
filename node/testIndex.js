let {count} = require('./testModule');

exports.index = function(req, res){
    count('index');
};