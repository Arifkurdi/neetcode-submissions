class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs: string[]): string {
        let result = "";

        for (const str of strs) {
            result += `${str.length}#${str}`;
        }

        return result;
    }

    decode(s: string): string[] {
        const result: string[] = [];

        let i = 0;

        while (i < s.length) {
            let j = i;

            // Find the '#'

            while (s[j] !== "#") {
                j++;
            }

            // Read the length

            const length = Number(s.slice(i, j));

            // String starts after '#'

            const start = j + 1;

            result.push(s.slice(start, start + length));

            // Move to next encoded string

            i = start + length;
        }

        return result;
    }
}
