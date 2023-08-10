function merge(arr1, arr2) {
    let newArr = [];
    const m = arr1.length;
    const n = arr2.length;
    let i = 0, j = 0;
    while(i < m && j < n) {
        if(arr1[i] <= arr2[j]) {
            newArr.push(arr1[i++]);
        } else {
            newArr.push(arr2[j++]);
        }
    }
    for(i; i < m; i++) {
        newArr.push(arr1[i]);
    }
    for(j; j < n; j++) {
        newArr.push(arr2[j]);
    }
    return newArr
}

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    } else {
        const m = parseInt(arr.length/2, 10)
        const subArr1 = arr.slice(0, m);
        const subArr2 = arr.slice(m, arr.length);
        const sortedArr1 = mergeSort(subArr1);
        const sortedArr2 = mergeSort(subArr2);
        return merge(sortedArr1,sortedArr2);
    }
}

console.log( mergeSort([4,5,34,2,0,3]));
console.log( mergeSort([2,4,67,34,8,28,94]));
console.log( mergeSort([1]));
console.log( mergeSort([2,1]));
console.log( mergeSort([1,2]));