class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let zeros = 0;
        let prod = 1;
        let i = 0;
        while (i < nums.length) {
            if (!nums[i]) {
                zeros++;
            } else {
                prod *= nums[i];
            }

            i++;
        }
        let zerosArr = Array(nums.length).fill(0);
        if (zeros > 1) {
            return zerosArr;
        }
        if (zeros == 1) {
            let item = prod ;
            zerosArr[nums.indexOf(0)] = item;
            return zerosArr;
        }
        const result = nums.map((n) => prod / n);
        return result;
    }
}
