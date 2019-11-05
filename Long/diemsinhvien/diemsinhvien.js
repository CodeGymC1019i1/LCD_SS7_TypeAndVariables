function f() {
    let vatly=parseInt(document.getElementById('vatly').value);
    let hoahoc=parseInt(document.getElementById('hoahoc').value);
    let sinhhoc=parseInt(document.getElementById('sinhhoc').value);
    let trungbinh=(vatly+hoahoc+sinhhoc)/3;
    let tong=vatly+hoahoc+sinhhoc
 document.write("điểm trung bình là:" + trungbinh);
    document.write("điểm tổng là:" + tong)


}