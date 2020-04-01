function cariMean(arr) {
    var panjangArr = arr.length;
    var jumlahArr = 0, rataArr = 0, bulatRata = 0;

    // menjumlah semua elemen
    for (var i = 0; i < panjangArr; i++) {
      jumlahArr += arr[i];
    }
  
    rataArr = jumlahArr / panjangArr;
    // membulatkan nilai bagi, desimal < 5 ke bawah, desimal >= 5 ke atas
    var strRata = rataArr.toString();
    if (strRata.length > 1) {
      if (strRata[2] > 1 && strRata[2] < 5) {
        bulatRata = parseInt(strRata);
      } else if (strRata[2] >= 5 && strRata[2] < 10) {
        bulatRata = Number(strRata[0]) + 1;
      }
    } else {
      bulatRata = rataArr;
    }
  
    return bulatRata;
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7
