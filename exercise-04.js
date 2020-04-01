function dataHandling2() {
    //splice
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    console.log(input);
  
    //bulan split switch case
    var pisahTanggal = input[3].split('/');
    var bulanLahir = Number(pisahTanggal[1]);
  
    switch(bulanLahir) {
      case 1 : {console.log('Januari'); break; }
      case 2 : {console.log('Februari'); break; }
      case 3 : {console.log('Maret'); break; }
      case 4 : {console.log('April'); break; }
      case 5 : {console.log('Mei'); break; }
      case 6 : {console.log('Juni'); break; }
      case 7 : {console.log('Juli'); break; }
      case 8 : {console.log('Agustus'); break; }
      case 9 : {console.log('September'); break; }
      case 10 : {console.log('Oktober'); break; }
      case 11 : {console.log('November'); break; }
      case 12 : {console.log('Desember'); break; }
      default : {console.log('Bulan tidak valid! (1-12)'); break; }
    }  
  
    //sort descending
    var listAngka = [];
    for (var i = 0; i < pisahTanggal.length; i++) {
      listAngka.push(Number(pisahTanggal[i]));
    }
  
    for (var i = listAngka.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (listAngka[j] < listAngka[j + 1]) {
          y = listAngka[j + 1];
          listAngka[j + 1] = listAngka[j];
          listAngka[j] = y;
        }
      }
    }
  
    var strAngka = [];
    for (var i = 0; i < listAngka.length; i++) {
      strAngka.push(listAngka[i].toString());
    }
    console.log(strAngka);
  
    //join
    var gabungTanggal = pisahTanggal.join('-');
    console.log(gabungTanggal);
  
    //slice
    var irisNama = input[1].slice(0, 15);
    console.log(irisNama);
  }
  
  var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
  
  dataHandling2(input);