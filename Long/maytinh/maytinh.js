function cong() {
 let socongThu1= parseFloat(document.getElementById('soT1').value);
 let socongThu2= parseFloat(document.getElementById('soT2').value);
 let resultcong=socongThu1+socongThu2;
 document.getElementById('result').innerHTML="Result addition:" + resultcong
}
function tru() {
    let sotruThu1= parseFloat(document.getElementById('soT1').value);
    let sotruThu2= parseFloat(document.getElementById('soT2').value);
    let resulttru=sotruThu1-sotruThu2;
    document.getElementById('result').innerHTML="Result Subtraction:" + resulttru

}
function nhan() {
    let sonhanThu1= parseFloat(document.getElementById('soT1').value);
    let sonhanThu2= parseFloat(document.getElementById('soT2').value);
    let resultnhan=sonhanThu1*sonhanThu2;
    document.getElementById('result').innerHTML="Result Subtraction:" + resultnhan

}
function chia() {
    let sochiaThu1= parseFloat(document.getElementById('soT1').value);
    let sochiaThu2= parseFloat(document.getElementById('soT2').value);
    let resultchia=sochiaThu1/sochiaThu2
    document.getElementById('result').innerHTML="Result Subtraction:" + resultchia

}


