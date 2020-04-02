function pasanganTerbesar(num) {
    var maxAngka = 0;
    var strNum = num.toString();

    // membuat pasangan nilai
    for (var i = 0; i < strNum.length - 1; i++) {
      var angka = Number(strNum[i] + strNum[i + 1]);
      // mencari nilai terbesar
      if (angka > maxAngka) {
        maxAngka = angka;
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
