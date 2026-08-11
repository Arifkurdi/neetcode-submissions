class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const myMap = new Map<number, number>();
        const ans = [];
        let l = 0;
        let r = numbers.length - 1;
        while(l < r){
            let values = numbers[l] + numbers[r];
            if(values === target){
                return [l + 1, r + 1];
            }
            if(values > target){
                r--;
            }else{
                l++;
            }
        }

        // if(numbers.length < 1) return [];
        // for(let i = 0; i < numbers.length; i++){
        //     const rest = target - numbers[i];
        //     if(!myMap.get(rest)){
        //         myMap.set(rest, i + 1);
        //     }else{
        //         return [myMap.get(rest), i + 1];
        //     }
        // }

    }
}
