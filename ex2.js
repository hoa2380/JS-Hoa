//ham
//cach viet thong thuong
function hello(name){
    console.log(name);
}
//cach viet khac 
const hello1 = function(name){
    console.log(name +" den tu hello1");
}

//Cách viết hàm trong JS ES6
const hello2=(name) =>{
    console.log(name + " den tu hello hien dai")
}

//Nếu chỉ có 1 tham số, và 1 giá trị return
const tinhBinhPhuong = so => so*so ;
console.log(tinhBinhPhuong(12345));

hello('Hoang Nam');
hello1("Hoang Nu");
hello2("Hoang BD");