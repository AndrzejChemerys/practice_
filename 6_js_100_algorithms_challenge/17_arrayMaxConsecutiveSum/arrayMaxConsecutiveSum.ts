function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sum=0;
    let max=0;

    for (let i=0; i<k; i++){
        sum += inputArray[i];
        console.log(sum);
    }
    console.log(sum);
    max = sum;
    console.log(max);

    for(let i=k; i<inputArray.length; i++){
        console.log(i);
        console.log(sum);

        sum -= inputArray[i-k];
        console.log(i);
        console.log(inputArray[i]);
        
        console.log(i-k);
        console.log(inputArray[i-k]);
        
        console.log(sum);
        
        sum += inputArray[i];
        console.log(inputArray[i]);
        console.log(sum);

        if(sum > max){
            max=sum;
        }
        console.log(max);
    }

    return max;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([1,2,3,4,5,6,7,8,9,10], 2));