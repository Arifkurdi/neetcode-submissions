class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let b = 0;
        let l = 0;
        let r = heights.length - 1;

        while(l < r){
            const width = r - l;
            const hight = Math.min(heights[l], heights[r]);
            const area = width * hight;
            if(area > b){
                b = area;
            }
            if(heights[l] < heights[r]){
                l++;
            }else{
                r--
            }
        }

        return b;
    }
}
