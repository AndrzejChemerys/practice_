function houseOfCats(legs: number): number[] {
    const peopleCount: number[]=[];
    console.log(peopleCount)

    if(legs===2) {
        console.log(peopleCount)
        return [1];
    }

    while(legs>=0) {
        console.log(legs)
        console.log(peopleCount)
        peopleCount.unshift(legs/2);
        console.log(peopleCount)
        legs -= 4;
        console.log(legs)
        console.log(peopleCount)
        

    }
    console.log(peopleCount)
    return peopleCount;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
