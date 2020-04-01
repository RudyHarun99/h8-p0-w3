function pasanganTerbesar(num) {
    var arrAngka = [];
    var angka = 0;
    var strNum = num.toString();
    // membuat list isi pasangan angka
    for (var i = 0; i < strNum.length - 1; i++) {
      angka = Number(strNum[i] + strNum[i + 1]);
      arrAngka.push(angka);
    }

    // mengurutkan pasangan angka dari yang terbesar
    var maxAngka = 0;
    for (var i = arrAngka.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (arrAngka[j] < arrAngka[j + 1]) {
          var y = arrAngka[j + 1];
          arrAngka[j + 1] = arrAngka[j];
          arrAngka[j] = y;
        }
      }
    }
    // mengambil angka yang terbesar berada di index 0
    maxAngka = arrAngka[0];
    
    return maxAngka;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99