const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
];

console.table(arr);
console.table(arr[3][0]);
console.table(arr[3][0][2]);