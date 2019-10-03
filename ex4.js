const array1 = [1, 2, 3, 4];
const array2 = [...array1, 5, 6, 7];

const name = {
    name1: 'Văn Hoà',
    name2: 'Văn Huy'
};

const dsLop = {
    ...name,
    name3: 'Văn Hùng',
    name4: 'Văn Tùng'
}
console.log(name);
console.log(dsLop);

console.log(array1);
console.log(array2);