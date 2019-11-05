//Khai báo và sử dụng biến

let i = 10;
let f =20.5;
let b = true;
let s = "Hà Nội";
document.write("i=" +i);
document.write('<br>');
document.write("f= " + f);
document.write('<br>');
document.write("b= " + b);
document.write('<br>');
document.write("s= " + s);


/*Khai báo chiều dài và rộng hình chữ nhật, tính diện tích hình chữ nhật*/

let width = 20;
let height = 10;
let area = width*height;
document.write('Area = ' + area);

/*Dùng hàm promt nhập vào 2 số từ bàn phím, lưu vào a và b.
Kiểm tra xem a có phải bội số của b hay không
Hiển thị ra kết quả bằng alert() */

let a = prompt('Input number a:');
let b1 = prompt('Input number b1:');
if (b1%a == 0) {
    alert(b1 + " is multiple number of " + a);
}
else {
    alert(b1 + " is not multiple number of " + a);
}