function omit(obj, fields) {
  var match = true;
  for (let i = 0; i<fields.length;i++){
    const key = fields[i];
    if(obj[key]===undefined){
      match = false;
    }
  }
  if(match){
  const shallowCopy = {
    ...obj,
  };
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
  }else{
    alert("the given key does not exist in the object");
  }
}

export default omit;
