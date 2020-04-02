function pasanganTerbesar(num) {
    var arrAngka = [];
    var angka = 0;
    var strNum = num.toString();
    // membuat list isi pasangan angka
    for (var i = 0; i < strNum.length - 1; i++) {
      angka = Number(strNum[i] + strNum[i + 1]);
      arrAngka.push(angka);
    }

    // mencari nilai terbesar
    var maxAngka = 0;
    for (var i = 0; i < arrAngka.length; i++) {
      if (arrAngka[i] > maxAngka) {
        maxAngka = arrAngka[i];
      }
    }

    return maxAngka;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
