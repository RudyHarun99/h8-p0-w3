function balikString(kata) {
    var panjangKata = kata.length - 1;
    var balikKata = '';
    
    for (var i = panjangKata; i > -1; i--) {
      balikKata += kata[i];
    }
    console.log(balikKata);
  }

balikString('hello world!');