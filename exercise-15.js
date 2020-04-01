function groupAnimals(animals) {
  // list isi huruf awal, masih ada nilai ganda
  var awal = [];
  for (var i = 0; i < animals.length; i++) {
    awal.push(animals[i][0]);
  }

  // list menghapus nilai ganda
  var urut = [];
  for (var i = 0; i < awal.length; i++) {
    var hitung = 0;
    for (var j = i; j < awal.length; j++) {
      if (awal[i] == awal[j]) {
        hitung++;
      }
    }
    if (hitung == 1) {
      urut.push(awal[i]);
    }
  }

  // mengurutkan isi list dari alfabet terkecil
  for (var i = urut.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (urut[j] > urut[j + 1]) {
        var y = urut[j + 1];
        urut[j + 1] = urut[j];
        urut[j] = y;
      }
    }
  }

  // list hasil mengelompokkan animals berdasarkan huruf awal yang sudah urut
  var hasil = [];
  for (var i = 0; i < urut.length; i++) {
    var temp = [];
    for (var j = 0; j < animals.length; j++) {
      if (urut[i][0] == animals[j][0]) {
        temp.push(animals[j]);
      }
    }
    hasil.push(temp);
  }

  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
console.log(groupAnimals(['ayam', 'kucing', 'bebek', 'bangau', 'zebra']));
// [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]