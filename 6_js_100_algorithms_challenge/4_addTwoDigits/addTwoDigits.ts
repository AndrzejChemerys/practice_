function addTwoDigits(n: any): number {
    const nums = n.toString().split('');
    return parseInt(nums[0]) + parseInt(nums[1]);
    // return nums.reduce((a:string, b:string)=>{
        
    // });
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(33));