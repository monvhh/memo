let count = {}; // 因模块是封闭的，这里实际上借用了js闭包的概念
exports.count = function(name){
     if(count[name]){
          count[name]++;
     }else{
          count[name] = 1;
     }
     console.log(name + '被访问了' + count[name] + '次。');
};
