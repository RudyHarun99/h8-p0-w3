function tentukanDeretAritmatika(arr) {
    var selisih = arr[1] - arr[0]; // mencari selisih index 1 dengan index 0
    var cek = true;
  
    // membandingkan selisih tiap elemen dengan selisih di atas
    for (var i = arr.length - 1; i > 0; i--) {
      if (selisih !== arr[i] - arr[i-1]){
        cek = false;
      }
    }
  
    return cek;
  }
    
    // TEST CASES
    console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
    console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
    console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
    console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
    console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false