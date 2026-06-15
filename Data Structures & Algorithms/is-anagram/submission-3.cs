public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length){
            return false;
        }

        char[] sChars = s.ToCharArray();
        char[] tChars = t.ToCharArray();

        Array.Sort(sChars);
        Array.Sort(tChars);

        string sortedS = new string(sChars);
        string sortedT = new string(tChars);

        return sortedS == sortedT;
    }
}
