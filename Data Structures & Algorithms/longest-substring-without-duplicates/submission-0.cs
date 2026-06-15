public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int left = 0;
        int maxLength = 0;

        HashSet<char> seen = new HashSet<char>();

        for (int right = 0; right < s.Length; right++) {
            char current = s[right];

            while (seen.Contains(current)) {
                seen.Remove(s[left]);
                left++;
            }

            seen.Add(current);

            int currentLength = right - left + 1;

            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        }

        return maxLength;
    }
}