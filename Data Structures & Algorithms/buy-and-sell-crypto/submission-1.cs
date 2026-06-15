public class Solution {
    public int MaxProfit(int[] prices) {
            int bf = 0;

        for (int i = 0; i < prices.Length; i++){
            int x = 0;
            for (int j = i; j < prices.Length; j++){
                int y = prices[j] - prices[i];
                if(y > x){
                    x = y;
                }
            }
            if(x > bf){
                bf = x;
            }
        }

        return bf;
    }
}
