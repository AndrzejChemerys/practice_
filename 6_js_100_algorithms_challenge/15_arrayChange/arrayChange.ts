function arrayChange(inputArray: number[]): number {
 let count = 0;
 for(let i=0; i<inputArray.length; i++){
     if(inputArray[i] >= inputArray[i+1]){
         console.log(inputArray[i]);
         console.log(inputArray[i+1]);
         const difference = (inputArray[i]+1)-inputArray[i+1];
         console.log(difference);
         inputArray[i+1]=inputArray[i]+1;
         console.log(inputArray[i+1]);
         count += difference;
         console.log(count);
     }
 }
 return count;
}

console.log(arrayChange([1, 1, 1]));