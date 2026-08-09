class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const theMap = [];
        let ans = false;
        nums.forEach(n => {
            if(theMap.includes(n)){
                ans = true;
            }
            theMap.push(n);
        })
        return ans;
    }
}
