exports.getDate = function(){
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const date = new Date();

  return date.toLocaleDateString("en-US", options);

}

exports.getDay = function(){
  const options = { weekday: 'long'};
  const date = new Date();

  return date.toLocaleDateString("en-US", options);

}
