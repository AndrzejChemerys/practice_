function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    while(numberOfDigits >= current.toString().length){
        numberOfDigits-=current.toString().length;

        console.log(numberOfDigits);
        console.log(current);
        console.log(current.toString().length);

        if(numberOfDigits >= current.toString().length){
            current++;

            console.log(numberOfDigits);
            console.log(current);
            console.log(current.toString().length);

        }
    }
    return current;
}

// console.log(pagesNumberingWithInk(1,5));
console.log(pagesNumberingWithInk(21,9));
// console.log(pagesNumberingWithInk(8,4));
