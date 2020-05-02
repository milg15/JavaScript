function diffArray(arr1, arr2) {
  let newArr1 = arr1.filter(elem => ! arr2.includes(elem));
  let newArr2 = arr2.filter(elem => ! arr1.includes(elem));
  
  let newArr = newArr1.concat(newArr2)
  return newArr;
}


