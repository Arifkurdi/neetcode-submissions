class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const myMap: Record<number, number> = {};
        const answers: number[] = [];
        nums.forEach((n) => {
            if (myMap[n]) {
                myMap[n]++;
            } else {
                myMap[n] = 1;
            }
        });

        const sortedEntries = Object.entries(myMap).sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            answers.push(parseInt(sortedEntries[i][0]));
        }

        return answers;
    }
}
