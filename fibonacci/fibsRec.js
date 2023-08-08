function fibsRec(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0,1];
    } else {
        let fibsArray;
        fibsArray = fibsRec(n-1);
        currentElement = fibsArray[fibsArray.length - 2] + fibsArray[fibsArray.length - 1];
        fibsArray.push(currentElement);
        return fibsArray;
    }
}

console.log(fibsRec(3));
console.log(fibsRec(8));