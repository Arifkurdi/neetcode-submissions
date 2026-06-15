public class Solution {
    public bool IsPalindrome(string s) {
        string cleaned = "";
        foreach (char c in s) {
            if (char.IsLetterOrDigit(c)) {
                cleaned += char.ToLower(c);
            }
        }
        char[] chars = cleaned.ToCharArray();
        Array.Reverse(chars);
        string reversed = new string(chars);

        return cleaned == reversed;
    }
}
