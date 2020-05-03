function diffArray(arr1, arr2) {
  let newArr1 = arr1.filter(elem => ! arr2.includes(elem));
  let newArr2 = arr2.filter(elem => ! arr1.includes(elem));
  
  let newArr = newArr1.concat(newArr2)
  return newArr;
}


function destroyer(arr) {
  let numbers = Array.from(arguments).slice(1)
  return arr.filter(n => !numbers.includes(n))
}


//What's in a name
function whatIsInAName(collection, source) {
  // Only change code below this line
  let sourceKey = Object.keys(source)
  return collection
         .filter(c => {
            let exist = sourceKey
             .filter(k => source[k] == c[k])
             return exist.length == sourceKey.length
            }
          );
}

function whatIsInAName(collection, source) {
  // Only change code below this line
  let sourceKey = Object.keys(source)
  return collection
        .filter(c => 
            sourceKey.every(k => c[k] == source[k]));
}

//splittt
function spinalCase(str) {
  return str.split(/(?=[A-Z])|\s|_|-/)
        .join('-').toLowerCase();
}

//Pig latin -> interesting regex tool "exec" returns
// index where it found the character
function translatePigLatin(str) {
  let hasVowel = /[aeiuo]/.exec(str);
  let vowelIndex = (hasVowel) ? hasVowel.index : -1

  return ( vowelIndex != 0 ? 
        (str.substring(vowelIndex)
        + str.substring(0, vowelIndex))
          .concat("ay")
    :   str.concat("way") )
}

//replace word and keep upper case
function myReplace(str, before, after) {
  //make first letter upper case 
  after = (/^[A-Z]/.test(before)) 
          ? after.charAt(0).toUpperCase() + after.slice(1) 
          : after

  return str.replace(before, after);
}

//DNA Pairing
function pairElement(str) {
  let pairs = {'A': "T", 'T': 'A', 'C':'G', 'G':'C'}
  return str.split('').map(c => [c, pairs[c]]);
}

//Missing letters
function fearNotLetter(str) {
let alphabeth = "abcdefghijklmnopqrstuvwxyz"
  let firstLetter = alphabeth.indexOf(str.charAt(0))
  let lastLetter = alphabeth.indexOf(str.charAt(str.length - 1)) + 1

  for (let letter of alphabeth.slice(firstLetter, lastLetter).split('')){
    if (!str.includes(letter)){
      return letter
    }
  }

//Missing letter without the [a-z]
function fearNotLetter_2(str) {
  let firstLetter = str.charCodeAt(0)
  let lastLetter = str.charCodeAt(str.length - 1)
  let numbers = []

  for (let i = firstLetter; i <=lastLetter; i++)
    numbers.push(i)

  for (let c of String.fromCharCode(...numbers)){
      if (!str.includes(c))
        return c
  }
}

//Thrid try xd - Missing letter without the [a-z] and one less loop
function fearNotLetter(str) {
  let start = str.charCodeAt(0)
  let stop = str.charCodeAt(str.length - 1)      

  let codes = Array
            .from({length: (stop - start) + 1},
            (_, i) => start + i);
 
  for (let c of String.fromCharCode(...codes)){
      if (!str.includes(c))
        return c
  }
}
  
//4th attemp
function fearNotLetter(str) {
  let start = str.charCodeAt(0)
  let stop = str.charCodeAt(str.length - 1)      

  let codes = Array
            .from({length: (stop - start) + 1},
            (_, i) => start + i);
 
  let c = String.fromCharCode(...codes).split('')
  c = c.filter(c => !str.includes(c))
  
  return c.length ? c[0] : undefined
}
  
//this was copied
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i){
      if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1)
        return String.fromCharCode(str.charCodeAt(i-1) + 1)
  }
}
  
//Sorted Union
function uniteUnique(arr) {
  let adds = Array.from(arguments).slice(1)
  for (let a of adds){
    let newA = a.filter(c => !arr.includes(c))
    arr.push(...newA)
  }
  return arr;
  
// Sorted Union -> answer in part
function uniteUnique(...arrs) {
  let flat = [].concat(...arrs); //flaten the array
  return [...new Set(flat)]; //create a set
}
}
  
  
//Convert HTML Entities
function convertHTML(str) {
  const translate = {"&": "&amp;", "<": "&lt;", ">": "&gt;",'"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/([&<>\"'])/g, m => translate[m]);
}
  
//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let fib = [1, num > 1 ? 1 : 0]
  for (let i = 0; fib[i] + fib[i+1] <= num; ++i)
    fib.push(fib[i] + fib[i+1])

  return fib.filter(a => a % 2 != 0)
            .reduce((a, b) => a+b)
}
  
  
  //sum of prime
function sumPrimes(num) {
  const isPrime = (a) => {  
      for(let i=2; i<a; i++)
        if(a%i == 0) return false;
      return true;
  }

  const x = Array.from({length: num}, (_, i) => i + 1);
  return x.filter(n => isPrime(n) && n!=1).reduce((a,b) => a+b);
}
  
//NOt the best but it works
function smallestCommons(arr) {
  arr.sort((a, b) => a-b)
  let nums  = Array.from({length:arr[1] - arr[0] + 1},
            (_, i) => arr[0] + i);

  for (let i=1, q=0;; i++, q = nums[0]*i*nums[1]){
    if (nums.every(n=> i%n==0)) return i;
  }
}
  
  
 //My solution
  function dropElements(arr, func) {

  let index = arr.map((n) => func(n))
  for (let i in arr){
    if (index[i]) return arr.slice(i)
  }
  return []
}

  
 //HEYYY findIndex is a thing solution
¿function dropElements(arr, func) {
  let i = arr.findIndex(func)
  return arr.slice(i>=0 ? i:arr.length)
}
  
  //jejeje i tried recursion
  function steamrollArray(arr) {
  let newArr = []
  if (typeof(arr[0]) != typeof([])){
    newArr = 
    if (arr[0] == undefined) return 
    newArr = newArr.concat(steamrollArray(arr.slice(1)));
    return
  }
  else{
    let value = arr[0][0]
    if (arr[0].length < 2){
      arr = arr.slice(1)
      arr.unshift(value)
    }
    else
      arr = arr[0]
    steamrollArray(arr)
  }
  return newArr;
}

  //SOME UGLY CODDE!! 
function steamrollArray(arr) {
  let newArr = []

  while (arr.length != 0){
    let crr = arr[0]
    arr = arr.slice(1)
    while (crr != undefined){
      if (typeof(crr) != typeof([]) || 
        Object.keys(crr).length === 0 && ! Array.isArray(crr)){

        newArr.push(crr)
        break
      }
      else if (crr.length > 1){
        let value = crr[0]
        crr = crr.slice(1)[0]
        if (typeof(crr) == typeof([]))
          crr.unshift(value)
        else{
          newArr.push(value)
        }
      }
      else
        crr = crr[0]
    }
  }
  return(newArr)
}

//not my own pretty code - recursion is amazing
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;

  
//Fun 
  function binaryAgent(str) {
  return str.split(' ')
            .map(b => String
                  .fromCharCode(
                    parseInt(b, 2)
                    .toString(10)
                  )
                )
                .join('');
}
  
//better solution using "..."
return console.log(String.fromCharCode(...str.split(' ').map(c => parseInt(c, 2))))

  
//Everything Be True
function truthCheck(collection, pre) {
  let x = collection.map((k, i)=> k[pre])
  //  return collection.every((k, i)=> k[pre]);
  return x.every(v => v);
}
  
  
//Arguments Optional
function addTogether(a, b) {
  if (Number.isInteger(a)){
    return b == undefined
      ? (b) => addTogether(a, b) :
      Number.isInteger(b) ? a+b : undefined
  }
}
    
//Make a Person
let Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  this.getFirstName = () => firstAndLast.split(" ")[0]
  this.getLastName = () => firstAndLast.split(" ")[1]
  this.getFullName = () => firstAndLast

  this.setFirstName = (first) => {
    firstAndLast = firstAndLast.replace(this.getFirstName(), first);
  }
  this.setLastName = (last) => {
    firstAndLast = firstAndLast.replace(this.getLastName(), last);
  }

  this.setFullName = (newfirstAndLast) => {firstAndLast = newfirstAndLast}
};
  
 
//Map the Debris
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 
  for (let obj of arr){
    let a = obj.avgAlt + earthRadius
    console.log(obj)
    obj['orbitalPeriod'] = Math.round(2*Math.PI*Math.sqrt(a*a*a/GM))
    delete obj.avgAlt
  }
  return arr;
}
  
///Not mine 
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}
  
  
