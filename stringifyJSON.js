
// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	
  if(typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
}

  if(typeof obj === 'string'){
    return '"' + obj + '"';              
  }
 
  if(typeof obj === 'number'){
    obj += obj.toString();
    return (obj);
  }
  if(obj === null || typeof obj === 'undefined' || typeof obj === 'function'){
    return 'null';
  }
  
  if(Array.isArray(obj)){
    var result = "[";
    for(var i = 0; i < obj.length; i++){
      if(i !== 0) {result += ","};
      result += stringifyJSON(obj[i]);
    }
    return result += "]";
  }
  
    if(typeof obj === 'object'){
   var arg = "{";

      var count = 0;

      for (var rel in obj){
      	if(typeof obj[rel] === 'function'){
      		return '{}';
      }

        if(count !== 0) {
        	arg += ",";
        }
          count++;
        arg += '"' + rel + '"' + ":";
        
         if(typeof obj[rel] === 'object' && obj[rel] != null){

         	console.log(obj[rel]);
       arg += stringifyJSON(obj[rel]);//after recursion does arg get stored in stack?
       }
      
        else if(typeof obj[rel] === 'string'){
         arg+= '"' + obj[rel] + '"';// stringifyJSON(obj[rel])
       }
       else{
        arg += obj[rel];
       }
        

      }
        arg += "}";
    return arg;
    }
   
}; 





