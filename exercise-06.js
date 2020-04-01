function angkaPalindrome(num) {
  num += 1;

  while (true) {
    var strNum = num.toString();
    var balikNum = '';
    for (var i = strNum.length - 1; i > -1; i--) {
      balikNum += strNum[i]
    }

    if (strNum == balikNum) {
      return num;
    }
    num++;
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001