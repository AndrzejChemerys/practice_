function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    console.log(yourWeakest);
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    console.log(yourStrongest);
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    console.log(friendsWeakest);
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    console.log(friendsStrongest);

    return yourWeakest === friendsWeakest && yourStrongest === friendsStrongest;

}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
