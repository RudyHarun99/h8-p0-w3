function mengelompokkanAngka(arr) {
  var genap = [], ganjil = [], lipat3 = [], hasil = [];

  for (var i = 0; i < arr.length; i++) {
    arr[i] % 3 == 0 ? lipat3.push(arr[i]) : arr[i] % 2 == 0 ? genap.push(arr[i]) : ganjil.push(arr[i]);
  }

  hasil.push(genap, ganjil, lipat3);
  return hasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]