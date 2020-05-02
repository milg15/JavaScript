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

