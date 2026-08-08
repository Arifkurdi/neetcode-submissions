class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const answer: string[][] = [];
        const userMap = new Map<string, string[]>();

        strs.forEach((str) => {
            const sorted = [...str].sort().join("");
            if (userMap.get(sorted)) {
                const newValue = userMap.get(sorted);
                newValue.push(str);
                userMap.set(sorted, newValue);
            } else {
                userMap.set(sorted, [str]);
            }
        });

        return Array.from(userMap.values())
    }
}
