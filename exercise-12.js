function tentukanDeretGeometri(arr) {
  var bagi = arr[1] / arr[0]; // mencari nilai bagi index 1 dengan index 0
  var cek = true;
  
  // membandingkan nilai bagi masing2 elemen dengan nilai bagi di atas
  for (var i = arr.length - 1; i > 0; i--) {
    if (bagi !== arr[i] / arr[i-1]){
      cek = false;
    }
  }
  
  return cek;
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false