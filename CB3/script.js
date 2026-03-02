// function tinhTong(a,b){
//     return a+b;
// }
// var ketQua = tinhTong(5,10);
// console.log(ketQua);

// function tinhTong(){
//     console.log(arguments);
//     var tong = 0;
//     for( i of arguments){
//         tong += i;
//     }
//     return tong;
// }
// var ketQua = tinhTong(5,10,15,20);
// console.log(ketQua);
function funcA(){
    console.log("Đây là funcA");
    function funcB(){
        console.log("Đây là funcB");
    }
    funcB();
}
funcA();
//funcB();// Lỗi: Uncaught ReferenceError: funcB is not defined at script.js:11:1
// ham bieu thuc
// type ten_ham = function(){
//     // code
// }
// let ketQua = tinhTong(5,10,15,20);
// console.log(ketQua);
// const tinhTong = function(){
//     let tong = 0;
//     for (i of arguments){
//         tong += i;
//     }
//     return tong;
// }


// ham mui ten arrow function
//ko co aruments, ham phai trien khai truoc khi su dung
// type ten_ham = () => {
//     // code
// }
// const tinhTong = (...args) => {
//     let tong = 0;
//     for (let i of args) {
//         tong += i;
//     }
//     return tong;
// }
// let ketQua = tinhTong(5,10,15,20);
// console.log(ketQua);

// Ví dụ 1: Tổng các số chẵn
//  var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const tinhTongChan = (array) => {
//     let tong = 0;
//     for(const num of array){
//         if(num % 2 === 0){
//             tong += num;
//         }
//     }
//     return tong;
// }
// let ketQua = tinhTongChan(mang);
// console.log(ketQua);
// Ví dụ 2: Viết chương trình cho người dùng nhập vào số n lớn hơn 0.
//  Sau đó dựa vào n tính giá trị bieuThuc = 1/n + 2/n + 3/n + ... + n/n
// function tinhBieuThuc(n){
//     console.log(n);
//     let tong = 0;
//     for(let i = 0; ++i <=n; ){
//         tong += i/n;
//     }
//     return tong;
// }
// let n;
// do{
//     n = parseInt(prompt("Nhập vào số n lớn hơn 0:"));
//     if(n <= 0){
//         alert("Vui lòng nhập số n lớn hơn 0!");
//     }else{
//         let ketQua = tinhBieuThuc(n);
//         console.log(ketQua);
//     }
// }while(n <= 0);
// let a = 10;
// try{
//     console.log(a);
// }catch(error){
//     console.error("Đã xảy ra lỗi: ", error);
// }finally{
//     console.log("Khối finally luôn được thực thi");
// }

// let infor = {
//     fullname: "Nguyen Van A",
//     age: 30,
//     password: "123456"
// };
// infor.email = "nguyenvana@gmail.com";
// infor["phone"] = "0123456789";
// delete infor.age;
// console.log(infor);
// console.log(infor.email);
// console.log(infor["phone"]);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let tong = 0;
// //foreach
// numbers.forEach(function(item, index, array){
//     console.log("Item: ", item + " - Index: " + index);
//     tong += item;
//     numbers[index] = item * 2;
// })
// console.log("Tổng: ", tong);
// console.log("Mảng sau khi nhân đôi: ", numbers);

// const monHoc = [
//     {
//         ten: "Toán",
//         diem: 8.6
//     },
//     {
//         ten: "Lý",
//         diem: 9.2
//     },
//     {
//         ten: "Hóa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 7.8
//     }
// ]
// const hocSinhGioi = monHoc.every(function(item){
//     return item.diem >= 8.0;
// });
// console.log("Học sinh giỏi: ", hocSinhGioi);
// if(hocSinhGioi){
//     console.log("Học sinh đạt học sinh giỏi");
// }else{
//     console.log("Học sinh không đạt học sinh giỏi");
// }
//some: trả về true nếu có ít nhất 1 phần
// const monHoc = [
//     {
//         ten: "Toán",
//         diem: 8.6
//     },
//     {
//         ten: "Lý",
//         diem: 9.2
//     },
//     {
//         ten: "Hóa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 3.8
//     }
// ]
// const hocSinhYeu = monHoc.some(function(item){
//     return item.diem < 4.0;
// });
// console.log("Học sinh yếu: ", hocSinhYeu);
// if(hocSinhYeu === true){
//     console.log("Có ít nhất một học sinh yếu");
// }else{
//     console.log("Không có học sinh nào yếu");
// }
//find() & filter()
const monHoc = [
    {
        ten: "Toán",
        diem: 8.6
    },
    {
        ten: "Lý",
        diem: 9.2
    },
    {
        ten: "Hóa",
        diem: 8.5
    },
    {
        ten: "Tin",
        diem: 3.8
    },
    {
        ten: "Tin",
        diem: 5
    }
]
const xemDiemTin = monHoc.find(function(item){
    return item.ten === "Tin";
});
console.log("Điểm môn Tin: ", xemDiemTin);
const xemDiemTinYeu = monHoc.filter(function(item){
    return item.ten === "Tin" && item.diem < 4.0;
});
console.log("Điểm môn Tin yếu: ", xemDiemTinYeu);
let tong = monHoc.reduce(function(total, item){
    return total + item.diem;
}, 0);
console.log("Tổng điểm: ", tong);

