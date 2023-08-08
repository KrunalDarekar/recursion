function fibs(n) {
    const fibsArray = [];
    let prev = 0;
    let current = 1;
    let next;
    for (let i = 0; i < n; i++){
        fibsArray.push(prev);
        next = prev + current;
        prev = current;
        current = next;
    }
    return fibsArray;
}

console.log(fibs(3));
console.log(fibs(8));