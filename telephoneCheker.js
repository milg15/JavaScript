function telephoneCheck(str) {
  var number = ""; 
  var nmbs = 0;
  if (str[str.length-1].match(/[^0-9]/i) )
    return false;
  for(var i=0; i < str.length; i++){
      if(!str[i].match(/[^1-9+()-]/i))    
        number+=str.charAt(i);
      if(!str[i].match(/[^0-9]/i))
        nmbs++;
      if(!str[i].match(/[^a-zA-z+?]/i))
        return false;
  }
  if (nmbs===11 && number[0]!=1 || nmbs > 11 || nmbs < 10)
    return false;

  for(var i=0; i < str.length; i++){
    if (number[i]===")" && ((i-4>=0 && 
      number[i-4]!="(") || i-4<0) || 
      number[i]==="(" && ((i+4<str.length && 
      number[i+4]!=")")))
        return false;
  }
  return true;
}

telephoneCheck("555-555-5555");
