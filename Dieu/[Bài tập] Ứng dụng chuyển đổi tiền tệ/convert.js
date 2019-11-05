function convert() {

    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = 0;
    if (from == "USD"&&to =="VND") {
            result = amount * 23000;
        }
    if (from == "VND"&&to =="USD"){
        result = amount/23000;
    }
    if (from == to){
        result = amount;
    }

    document.getElementById("result").innerHTML = result.toString();


}