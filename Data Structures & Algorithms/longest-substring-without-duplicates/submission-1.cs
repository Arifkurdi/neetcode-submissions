public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int l = 0;
        int maxLength = 0;
        HashSet<char> word = new HashSet<char>();

        for(int r = 0; r < s.Length; r++){
            char current = s[r];
            while(word.Contains(current)){
                word.Remove(s[l]);
                l++;
            }
            word.Add(current);

            int currentLength = r - l + 1;

            if(currentLength > maxLength){
                maxLength = currentLength;
            }
        }
        return maxLength;
     }
}