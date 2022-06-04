function implementNestedForLoop(items){
    for (let i = 0; i<items.length; i++) {
        for(let j=0; j<items.length; j++) {
            console.log(items[i]+" "+items[j]);
        }
    } // Big O(n^2)
}

let items = [1,2,3,4,5];
implementNestedForLoop(items);