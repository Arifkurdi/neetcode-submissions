public class Solution {
    public int MaxProfit(int[] prices) {
        int l = 0;
        int b = 0;
        int r = 1;
        while (r < prices.Length) {
            int profit = prices[r] - prices[l];
            if (profit > 0) {
                if (profit > b) {
                    b = profit;
                }
            } else {
                l = r;
            }
            r++;
        }
        return b;
    }
}
