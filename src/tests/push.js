// var obj = {
//     table: []
//  };

//  obj.table.push({id: 1, square:2});

//  var json = JSON.stringify(obj);

//  var fs = require('fs');

//  fs.writeFile('marsha.json', json, 'utf8');

// fs.readFile('marsha.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//         console.log(err);
//     } else {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({id: 2, square:3}); //add some data
//     json = JSON.stringify(obj); //convert it back to json
//     fs.writeFile('marsha.json', json, 'utf8'); // write it back 
// }});

       var obj = {
         items: []
        };
        
       var array = JSON.parse(localStorage.getItem('items'));
    
        obj.items.push({array});
        
        var json = JSON.stringify(obj);
        
        var fs = require('fs');
        
        fs.writeFile('marsha.json', json, 'utf8');
        
        fs.readFile('marsha.json', 'utf8', function readFileCallback(err, data){
          if (err){
            console.log(err);
          } else {
            obj = JSON.parse(data); //now it an object
            obj.items.push({array}); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('marsha.json', json, 'utf8'); // write it back 
          }});