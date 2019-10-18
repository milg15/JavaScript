function rot13(str) { // LBH QVQ VG!
  var code = "";
  for (var i=0; i<str.length; i++){
    if (str.charAt(i).match(/[^A-Z]/))
      code += str.charAt(i);
    else{
      var c = str.charCodeAt(i)+13;
      if (c>90) c = c - 26; 
      code+=String.fromCharCode(c);
    }
  }
  return code;
}
