function isPalindrome(s: string): boolean {
    // Keep only alphanumeric characters and lowercase them
    const cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("mom"))
console.log(isPalindrome("dad"))
console.log(isPalindrome("raceacar"))