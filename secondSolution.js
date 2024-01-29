const isPalindrome = (statment) => {
  // firstly trim spaces and convert it to lowercase
  statment = statment.toLocaleLowerCase().trim();

  // single char is also palindrome cause it satisfy reading from forward or backword
  if (statment.length === 1) return true;

  // doing regex to get rid of any thing is not a (word, number(digit) or even (_))
  let cleanedPhrase = statment.replace(/[^\w\d]|_/g, "");

  // turning string into array
  const cleanedChars = cleanedPhrase.split("");

  // creating another reversed array with another memory reference usin spread operator
  const reversedCleanedChars = [...cleanedChars].reverse();

  // loop over two array and check element foreach one (original with reversed)
  for (let i = 0; i < cleanedChars.length; i++) {
    // if there was dofference between char and the reversed one means it cann't be palindrome so return false
    if (cleanedChars[i] !== reversedCleanedChars[i]) {
      return false;
    }
  }
  // if it passed without any proble it will be palidrome and return true
  return true;
};

// trigger isPalindrome function and log it's answer for testing
console.log(isPalindrome("Radssdar"));
