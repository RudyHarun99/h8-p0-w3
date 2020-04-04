function targetTerdekat(arr) {
  var loctO = [], loctX = [];

  // mencari nilai index dari masing2 karakter O dan X
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      loctO.push(i);
    } else if (arr[i] === 'x') {
      loctX.push(i);
    }
  }

  if (loctX.length == 0) {
    var jarakTerkecil = 0;
  } else {
    var selisihJarak = [];
    // list selisih jarak dari masing2 karakter O dan X
    for (var i = 0; i < loctO.length; i++) {
      for (var j = 0; j < loctX.length; j++) {
        var selisih = Math.abs(loctX[j] - loctO[i]);
        selisihJarak.push(selisih);
      }
    }

    // mengurutkan nilai selisih dari yang terkecil
    for (var i = selisihJarak.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (selisihJarak[j] > selisihJarak[j + 1]) {
          var y = selisihJarak[j + 1];
          selisihJarak[j + 1] = selisihJarak[j];
          selisihJarak[j] = y;
        }
      }
    }
    // mengambil nilai selisih terkecil yang berada di index 0
    var jarakTerkecil = selisihJarak[0];
  }

  return jarakTerkecil;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
