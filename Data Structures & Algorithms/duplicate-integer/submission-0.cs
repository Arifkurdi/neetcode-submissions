public class Solution {
    public bool hasDuplicate(int[] nums) {
        HashSet<int> numberSet = new HashSet<int>();
        bool isIt = false;
        foreach (int n in nums){
            if(numberSet.Contains(n)){
                isIt = true;
                break;
            }
            numberSet.Add(n);
        }
        return isIt;
    }
}