function isSubsequence(s: string, t: string): boolean {
    if (s.length > t.length) return false;
    if (s.length === 0) return true;

    let i = 0, j = 0;

    while (i < t.length && j < s.length) {
        if (t[i] === s[j]) {
            j++;
        }
        i++;
    }

    return j === s.length;
}

// Example usage
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
