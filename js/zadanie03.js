function bigestSumOfTwoElements(array) {
    if (array.length === 1)
        return array[0];
    else if (array.length === 0)
        return false;
    else {
        let array1 = array.sort().reverse();
        return array1[0] + array1[1];
    }
}

console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([21,14,84,34,11]));