// This methods runtime complexity is Big O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);s
        index++;
    } // Big O(n/2) = O(n)

    for (var i = 0; i < 100; i++) {
        console.log('hi'); // Bog O(n)
    }
}
let items = ["hello", "there", "pretty", "ladies", "how", "are", "you"];
printFirstItemThenFirstHalfThenSayHi100Times(items);

