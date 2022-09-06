function findCommonItem(array1, array2){
    let map = {}
    for (let i = 0; i<array1.length; i++) {
        if(!map[i]){
            const item = array1[i];
            map[item] = true;
        }
    }

    for (let j = 0; j<array2.length; j++) {
        if(map[array2[j]]) {
            console.log("true"+" "+array2[j])
        }
    }
}
const array1 = ["a","x","y","z"]
const array2 = ["p","q","a"]
findCommonItem(array1, array2);
// findCommonItemsWithBuiltInJsMethod(array1, array2);

// this solution is only possible with javascript
function findCommonItemsWithBuiltInJsMethod(array1, array2) {
    console.log(array1.some(item => array2.includes(item)));
}





















