function convertToRoman(num) {
 const romanKeys = {
   1: "I",
   5: "V",
   10: "X",
   50: "L",
   100: "C",
   500: "D",
   1000: "M", 
 }
 let numArr = num.toString().split('').reverse();
 let romanNum = "";

 for (let i = numArr.length - 1; i>=0; i--){
   let crr10 = 10**i
   let crrNum = numArr[i]
   let decValue = romanKeys[crr10]

   //lower than 4, 40, 400, 4000 no substraction needed
   if (crrNum < 4)
      romanNum += decValue.repeat(crrNum)

   //case if 4, 40, 400 and 9, 90, 900 
   else if (crrNum == 4 || crrNum == 9){
      let multiplier = (crrNum == 9) ? 10 : 5
      romanNum += decValue + romanKeys[crr10 * multiplier]
   }
  // 5,6,7,8 cases
  else{
    let cases = crrNum - 5;
    romanNum += romanKeys[5*crr10] + decValue.repeat(cases)
  }
}
 return romanNum;
}
