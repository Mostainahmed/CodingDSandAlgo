function iterateThroughTwoItems(boxes1, boxes2){
    for (let i=0; i<boxes1.length; i++){
        console.log(boxes1[i]);
    }
    for (let j = 0; j<boxes2.length; j++){
        console.log(boxes2[j]);
    }
}

let boxes1 = ["Apple", "jackfruit", "Banana"];
let boxes2 = ["Cow", "Chicken", "Cat", "Dog"]
iterateThroughTwoItems(boxes1, boxes2);