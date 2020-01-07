function sumAllPrimes(num: number): number {
    let primesTotal = 0;

    for (let i = 2; i < num; i++){
        console.log(i);
        for (let j = 2; j <= i; j++){
            console.log(j);
            if (i === j) {
                primesTotal += i;
                console.log(i);
                console.log(j);
                console.log(primesTotal);
            }

            if (i % j === 0){
                break;
            }
        }
    }
    console.log(primesTotal);
    return primesTotal;
}

console.log(sumAllPrimes(10));
// console.log(sumAllPrimes(977));