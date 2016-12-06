var getElementsByClassName = function(className) {
	var arr= [];
  var node = document.body;
    var serDOM = function (node,func) {
        func(node);                    
        node = node.firstChild;
        while(node) {
            serDOM(node,func);
            node = node.nextSibling;
        }

    };
  var addToClass = function(node){
    if(node.classList != null){
      if(node.classList.contains(className)) arr.push(node);
    }
  }
  serDOM(node, addToClass);
  console.log(arr);
  return arr;
}