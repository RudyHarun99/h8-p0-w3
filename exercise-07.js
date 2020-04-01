function hitungJumlahKata(kalimat) {
  var hitungKata = 1;
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] == ' ') {
      hitungKata++;
    }
  }

  return hitungKata;
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5