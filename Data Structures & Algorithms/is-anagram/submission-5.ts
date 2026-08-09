class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const ss = s.split("").sort().join("");
        const ts = t.split("").sort().join("");
        return ss === ts
    }
}
