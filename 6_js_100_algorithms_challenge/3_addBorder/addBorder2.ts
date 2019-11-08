function addBorder(picture:string[]){
    const lengthOfWall = picture[0].length;
    let wall = '';

    for( let i=0; i<lengthOfWall+2; i++){
        wall=wall.concat('*');
    }

    picture.unshift(wall);
    picture.push(wall);

return picture;



}

console.log(addBorder(['abcde', '1234']));
