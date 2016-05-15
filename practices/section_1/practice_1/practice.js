function collect_same_elements(collection_a, collection_b) {
  var newArray = [];
  
  for(var i = 0 ;i<collection_a.length;i++)
  {
    if(isExit(collection_a[i],collection_b))
      newArray.push(collection_a[i]);
  }
  
  return newArray;
}

function isExit(elemt,collection){
  
  for(var i= 0; i<collection.length; i++)
  {
    if(elemt === collection[i])
      
      return true;
  }
  
  return false;
}

module.exports = collect_same_elements;
