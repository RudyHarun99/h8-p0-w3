function hitungJumlahKata(kalimat) {
  // // Cara 1 : menghitung jumlah spasi + 1 = jumlah kata
  var hitungKata = 1;
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] == ' ') {
      hitungKata++;
    }
  }
  
  // // Cara 2 : memisahkan msg2 kata ke dalam array, lalu hitung panjang array
  // kalimat = kalimat + ' ';
  // var pisah = [];
  // var kata = '';
  // for (var i = 0; i < kalimat.length; i++) {
  //   if (kalimat[i] !== ' ') {
  //     kata += kalimat[i];
  //   } else {
  //     pisah.push(kata);
  //     kata = '';
  //   }
  // }
  // var hitungKata = pisah.length;

  return hitungKata;
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
