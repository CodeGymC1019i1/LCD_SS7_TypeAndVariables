function f() {
    let amount=document.getElementById('amount').value;
    let from=document.getElementById( 'from').value;
    let to=document.getElementById( 'to').value;
    let result=0;

    if(from=="fromUSD"&&to=="toUSD") {
        result=amount;
    }
    if(from=="fromVND"&&to=="toVND") {
        result=amount;
    }
    if (from=="fromUSD"&&to=="toVND") {
        result=23000*amount;
    }
    if (from=="fromVND"&&to=="toUSD") {
        result=amount/23000;
    }
    document.getElementById('result').innerHTML= result.toString();
}