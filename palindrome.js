function palindrome(str) {
  var newstr = "";
  for (var i = 0; i<str.length;i++)
    if (!str.charAt(i).match(/[^0-9a-z]/i))
      newstr += str.charAt(i).toUpperCase();

  for (var i = 0; i<newstr.length/2;i++){
    if(newstr.charAt(i)!=newstr.charAt((newstr.length)-1-i)){
      return false;
    }
  }
  return true;
}
