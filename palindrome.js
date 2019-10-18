function palindrome(str) {
  var newstr = "";
  for (var i = 0; i<str.length;i++)
    if (!str[i].match(/[^0-9a-z]/i))
      newstr += str[i].toUpperCase();

  for (var i = 0; i<newstr.length/2;i++){
    if(newstr[i].toUpperCase()!=newstr[newstr.length-1-i].toUpperCase())
      return false;
  }
  return true;
}
