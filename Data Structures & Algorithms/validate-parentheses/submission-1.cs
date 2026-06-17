public class Solution {
    public bool IsValid(string s) {
        Stack<char> list = new Stack<char>();
        Dictionary<char, char> pairs = new Dictionary<char, char> {
            { ')', '(' },
            { ']', '[' },
            { '}', '{' },
        };
        char[] openShape = "({[".ToCharArray();
        foreach (char c in s) {
            if (openShape.Contains(c)) {
                list.Push(c);
            } else {
                if (list.Count == 0){
                    return false;
                }

                char lastOpen = list.Pop();
                if (lastOpen != pairs[c]){
                    return false;
                }
            }
        }

        return list.Count == 0;
    }
}
