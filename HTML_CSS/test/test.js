function oddOrEven(array) {
    if (array == null) {
      return "even"
    } else {
      return array.reduce((a, b) => a + b, 0) % 2 == 0 ? "even" : "odd";
 //      const array2 = array.reduce((a, b) => a + b, 0);
 //      return array2 % 2 == 0 ? "even" : "odd"; 
    }
 }

 console.log(oddOrEven([1, 2, 3, 4, 5]))