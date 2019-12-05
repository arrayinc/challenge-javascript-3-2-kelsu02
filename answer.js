// *** YOUR ANSWER BELOW ***
let items = ["thumb", "shoe", "knee", "door", "hive", "stick", "heaven", "pate", "spine", "shin"];

function oldMan(number) {
    let rhyme = 0;
    for (let i = 1; i <= number; i++) {
        console.log(`This old man, he played ${i}.`);
        console.log(`He played knick-knack on my ${items[rhyme]}. With a knick-knack, paddy-whack, Give your dog a bone.`);
        console.log(`This old man came rolling home.`);
        rhyme += 1;
    }
}

oldMan(10, items);