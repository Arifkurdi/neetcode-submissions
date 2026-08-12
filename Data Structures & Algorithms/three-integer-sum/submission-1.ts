class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const answer = new Set<number[]>();
        const sortedNums = nums.sort((a, b) => a - b);
        for (let i = 0; i < sortedNums.length; i++) {
            if (i > 0 && sortedNums[i] == sortedNums[i - 1]) continue;
            let l = i + 1;
            let r = sortedNums.length - 1;
            while (l < r) {
                const res = sortedNums[i] + sortedNums[l] + sortedNums[r];
                if (res == 0) {
                    answer.add([sortedNums[i], sortedNums[l], sortedNums[r]]);
                    l++;
                    r--;
                    while (l < r && sortedNums[l] == sortedNums[l - 1]) l++;
                    while (l < r && sortedNums[r] == sortedNums[r + 1]) r--;
                } else if (res > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }

        return [...answer];
    }
}
