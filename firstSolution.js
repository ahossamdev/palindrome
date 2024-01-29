const isPalindrome = (statment) => {
  // firstly trim spaces and convert it to lowercase
  statment = statment.toLocaleLowerCase().trim();

  // single char is also palindrome cause it satisfy reading from forward or backword so return true (isPalindrome word)
  if (statment.length === 1) return true;

  // doing regex to get rid of any thing is not a (word, number(digit) or even (_))
  let cleanedChars = statment.replace(/[^\w\d]|_/g, "");

  // creating two pointers from right and left
  let left = 0;
  let right = cleanedChars.length - 1;

  // stop the while loop if they meets or cross
  while (left !== right) {
    // check if characters at pointers do not match so return false (isn't palindrome word)
    if (cleanedChars[left] !== cleanedChars[right]) {
      return false;
    }
    // in case of even length of word check if pointer next to each others that means it meets so return true (is palindrome word)
    if (right - left === 1) return true;
    left++;
    right--;
  }
  return true;
};

// trigger isPalindrome function and log it's answer for testing
console.log(isPalindrome("Raddar"));
