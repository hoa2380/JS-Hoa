class SinhVien {
    constructor(){
        this.name = "Hoà Đẹp Trai"
    }
    //printSV = () =>{
       // console.log(this.name);
    //}
}
const sinhVien = new SinhVien();
//sinhVien.printSV();
console.log(sinhVien.name);

//Cách 2
class SinhVien2 {
    name = "Hoà Đẹp Trai"
}
const sinhVien2 = new SinhVien2;
console.log(sinhVien2.name);