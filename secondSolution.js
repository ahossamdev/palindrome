const isPalindrome2 = (statment) => {
  if (typeof statment !== "string") return false;
  statment = statment.toLocaleLowerCase().trim();
  // single char is also palindrome cause it satisfy reading from forward or backword
  if (statment.length === 1) return true;
  let cleanedPhrase = statment.replace(/[^\w\d]|_/g, "");
  const cleanedChars = cleanedPhrase.split("");
  const reversedCleanedChars = [...cleanedChars].reverse();
  for (let i = 0; i < cleanedChars.length; i++) {
    if (cleanedChars[i] !== reversedCleanedChars[i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome2("Radssdar"));
