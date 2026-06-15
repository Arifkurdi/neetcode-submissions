public class Solution {
    public int MaxProfit(int[] prices) {
        int[] maxProfit = new int[prices.Length];

        for (int i = 0; i < prices.Length; i++){
            int x = 0;
            for (int j = i; j < prices.Length; j++){
                int y = prices[j] - prices[i];
                if(y > x){
                    x = y;
                }
            }
            maxProfit[i] = x;
        }

        return maxProfit.Max();
    }
}
