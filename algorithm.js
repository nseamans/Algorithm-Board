// Fibonacci Sequence --

/** fibonacci
 *  Calculates the sequence by adding the total of the last two positions. If this cannot
 *  be done 1 is returned.
 * @param position the number the fibonacci works the sequence code for
 * @returns the answer to the sequence at the given position
 */
function fibonacci(position) {
  if (position !== 0 && position < 3) {
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
}

/** fibSequence
 *   Takes in an integer and processes each number in it into the fibonacci method.
 *   Tells the user that the total does not point to a real result at 0.
 * @param int num the number the sequence will loop accross
 */
function fibSequence(num) {
  num = num + 1;
  let startPoint = 0;
  for (i = 0; i < num; i++) {
    if (i === 0) {
      if (startPoint != 0) {
        document.write("<h6>does not point to a real result</h6>");
      } else {
        startPoint = startPoint + 1;
      }
    } else {
      document.write(
        "<h6>The fibonacci result for " + i + " is " + fibonacci(i) + "</h6>"
      );
    }
  }
}

/** printData
 *  This funcition takes input from the fizzbuzz function and
 *  displays data based on the given results.
 */
function printData(fizz, buzz, fizzB, none, num) {
  var isInt = /^-?[0-9]+$/;
  if (isInt.test(num) === true) {
    if (fizzB !== 0) {
      if (fizzB !== 0) document.write(" FizzBuzz <br>");
    } else {
      if (buzz !== 0) document.write("Buzz <br>");
      if (fizz !== 0 && buzz === 0) document.write("Fizz <br>");
    }
  } else document.write("Input is a not real number <br>");
}

// FIzz Buzz with Tests --

/** fizzBuzz
 *  Takes in a arguement and assigns:
 *    Fizz if Divisable by 3
 *    Buzz if Divisable by 5
 *    FizzBuzz if Divisible by 3 and 5
 *
 *  The results are then passed to the printData Function
 *  if the input contained a real number
 *
 */
function fizzBuzz(num) {
  let fizz = 0;
  let buzz = 0;
  let fizzB = 0;
  let none = 0;

  if (isNaN(num)) {
    document.write(
      "The given input (" +
        num +
        ") cannot be accepted because it is not an integer. <br>"
    );
  } else {
    //Logic accounts for fizzbuzz operation
    for (var i = 1; i <= num; i++) {
      if (i % 15 === 0) {
        fizzB = fizzB + 1;
      } else if (i % 3 === 0) {
        fizz = fizz + 1;
      } else if (i % 5 === 0) {
        buzz = buzz + 1;
      } else {
        none = none + 1;
      }
    }
    printData(fizz, buzz, fizzB, none, num);
  }
}

/** revesrseWords
 *  This function takes in a string of data
 *  and reverses the words independently of the
 *  order in the string based on the spaces given.
 *  NOTE: any data given is automatically converted
 *  into a string.
 */
function reverseWords(string) {
  string = string.toString();
  var wordsArr = string.split(" ");
  var reversedWordsArr = [];

  wordsArr.forEach((word) => {
    var reversedWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(" ");
}

/** Sort_quick
 * Sorts an array with a quicksort
 */

// switch to insertion sort for arrays of length less than 27
function sort(list) {
  const length = list.length;
  if (length <= 1) return list;
  if (length > 1 && length <= 2) {
    if (length > 1 && list[1] < list[0]) {
      let sorted = [];
      sorted.push(list[1]);
      sorted.push(list[0]);
      return sorted;
    } else return list;
  } else {
    const left = [];
    const right = [];
    const sorted = [];
    const pivot = list.pop();
    for (let i = 0; i < list.length; i++) {
      if (list[i] <= pivot) left.push(list[i]);
      else right.push(list[i]);
    }
    return sorted.concat(sort(left), pivot, sort(right));
  }
  return quickSort(list);
}
let list = [8, 5, 13, 54, 23];
let sorted = sort(list);
