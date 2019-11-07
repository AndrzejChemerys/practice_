function add(param1, param2) {
    return param1+param2;
}

console.log(add(1,4));

function addNum(...param:number[]){
    let total = 0;
    param.forEach(element => {
        total+=element;
    });

    return total;

}

console.log(addNum(1,2,3));